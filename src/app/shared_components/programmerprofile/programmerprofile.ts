import {Component, View, provide, Input, EventEmitter} from 'angular2/angular2';
import {Programmer} from './programmer';
import {ClientProfile} from '../clientprofile/clientprofile';


@Component({
	selector: 'programmer-profile',
	events: ['remove']
})
@View({
	templateUrl: './app/shared_components/programmerprofile/programmerprofile.html',
	styleUrls: ['./app/shared_components/programmerprofile/programmerprofile.css'],
	directives: [ClientProfile]
})
export class ProgrammerProfile {
	@Input() programmer: Programmer;
	edit: boolean = false;
	remove: EventEmitter<Programmer> = new EventEmitter();
	removeLanguage(index) {
		this.programmer.languages.splice(index, 1);
	}
}
