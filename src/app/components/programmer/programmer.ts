import {Component, View, provide, Injectable} from 'angular2/angular2';
import {PeopleService} from '../../services/people_service';
import {ClientFactory} from '../../services/client_factory';
import {ProgrammerProfile} from "../../shared_components/programmer_profile/programmer_profile";
import {ProgrammerFactory} from "../../services/programmer_factory";
import {Programmer} from "../../services/programmer";

@Component({
	selector: 'programmers',
	providers: [
		PeopleService,
		provide(ClientFactory, {useClass: ProgrammerFactory})
	]
})
@View({
	templateUrl: './app/components/programmer/programmer.html',
	directives: [ProgrammerProfile]
})
export class ProgrammerComponent {
	programmers: Programmer[];
	selected = null;
	constructor(programmerService: PeopleService) {
		programmerService.json('mockdata/programmers.json')
			.subscribe(
				res => this.programmers = res,
				err => console.log(err)
			);
	}
	remove(programmer) {
		var index = this.programmers.indexOf(programmer);
		this.programmers.splice(index, 1);
	}
}
