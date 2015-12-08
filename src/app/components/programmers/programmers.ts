import {Component, View, provide} from 'angular2/angular2';
import {PeopleService} from '../../utils/peopleService';
import {Factory} from '../../utils/person';
import {ProgrammerFactory, Programmer} from '../../shared_components/programmerprofile/programmer';
import {ProgrammerProfile} from '../../shared_components/programmerprofile/programmerprofile';

@Component({
	selector: 'programmers',
	providers: [PeopleService, provide(Factory, { useClass: ProgrammerFactory })]
})
@View({
	templateUrl: './app/components/programmers/programmers.html',
	directives: [ProgrammerProfile]
})
export class ProgrammerComponent {
	programmers: Programmer[];
	constructor(ProgrammerService: PeopleService) {
		ProgrammerService.json('programmers.json')
			.subscribe(
				res => this.programmers = res,
				err => console.log(err)
			);
	}
	remove(programmer) {
		let index = this.programmers.indexOf(programmer);
		this.programmers.splice(index, 1);
	}
}