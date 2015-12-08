import {Component, View, provide} from 'angular2/angular2';
import {PeopleService} from '../../utils/peopleService';
import {Person, Factory} from '../../utils/person';
import {ClientComponent} from '../clients/clients';
import {ProgrammerComponent} from '../programmers/programmers';
import {ClientProfile} from '../../shared_components/clientprofile/clientprofile';
import {ClientFactory} from '../../shared_components/clientprofile/client';
import {Programmer, ProgrammerFactory} from '../../shared_components/programmerprofile/programmer';
import {ProgrammerProfile} from '../../shared_components/programmerprofile/programmerprofile';

@Component({
	selector: 'both',
	providers: [
		PeopleService,
		provide(Factory, { useClass: ClientFactory, multi: true }),
		provide(Factory, { useClass: ProgrammerFactory, multi: true })
	]
})
@View({
	templateUrl: './app/components/combined/combined.html',
	styles: [`
		.person {
			//background-color: blue;
			min-height: 6em;
		}
		.programmer {
			//background-color: red;
		}
		#combinedList {
			width: 20em;
		}
	`],
	directives: [ClientProfile, ProgrammerProfile]
})
export class CombinedComponent {
	private people: Array<Person> = [];
	constructor(PeopleService: PeopleService) {
		const factories = [
			{
				// ClientFactory
				index: 0,
				url: 'clients.json'
			},
			{
				// ProgrammerFactory
				index: 1,
				url: 'programmers.json'
			}
		];
		factories.forEach((factory) => {
			PeopleService.json(factory.url, factory.index).subscribe(
				people => {
					this.people = [...this.people, ...people];
					this.people.sort(sortByName);
				},
				err => console.log(err)
			);
		});
	}
	isProgrammer(p: Person) {
		return p instanceof Programmer;
	}
	remove(p: Person) {
		let index = this.people.indexOf(p);
		this.people.splice(index, 1);
	}
}

function sortByName(a: Person, b: Person) {
	if (a.getDisplayName() < b.getDisplayName()) {
		return -1;
	}
	if (a.getDisplayName() > b.getDisplayName()) {
		return 1;
	}
	return 0;
}