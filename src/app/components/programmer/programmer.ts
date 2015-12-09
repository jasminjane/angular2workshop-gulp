import {Component, View, provide, Injectable} from 'angular2/angular2';
import {PeopleService} from '../../services/people_service';
import {Client} from '../../services/client';
import {ClientFactory} from '../../services/client_factory';
import {ClientProfile} from "../../shared_components/client_profile/client_profile";
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
	programmerService: PeopleService;
	programmers: Programmer[];
	active: Programmer;
	constructor(programmerService: PeopleService) {
		this.programmerService = programmerService;
		this.programmerService.json('mockdata/programmers.json')
			.subscribe(
				res => this.programmers = res,
				err => console.log(err)
			);
	}
	add(first_name, last_name) {
		var newProgrammer = this.programmerService.factory.create({ first_name, last_name, languages: [] }); // http://es6-features.org/#PropertyShorthand
		this.programmers.push(newProgrammer);
	}
	remove(client) {
		//let index = this.clients.indexOf(client);
		//this.clients.splice(index, 1);
	}
}
