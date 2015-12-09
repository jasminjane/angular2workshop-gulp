import {Component, View, provide, Input, OnInit, Output, EventEmitter} from 'angular2/angular2';
import {Programmer} from '../../services/programmer';
import {ClientProfile} from "../client_profile/client_profile";

@Component({
	selector: 'programmer-profile',
	properties: ['programmer', 'selected']
})
@View({
	templateUrl: './app/shared_components/programmer_profile/programmer_profile.html',
	directives: [ClientProfile]
})
export class ProgrammerProfile {
	@Input() programmer: Programmer;
	@Input() selected: boolean;
	edit: boolean = false;

	@Output() remove: EventEmitter<Programmer> = new EventEmitter();
	removeLanguage(index) {
		this.programmer.languages.splice(index, 1);
	}
}
