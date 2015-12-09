import {Component, View, provide, Input, OnInit, Output, EventEmitter} from 'angular2/angular2';
import {Programmer} from '../../services/programmer';
import {ClientProfile} from "../client_profile/client_profile";


@Component({
	selector: 'programmer-profile',
	properties: ['client', 'selected']
	//lifecycleHooks: [OnInit]
})
@View({
	templateUrl: './app/shared_components/programmer_profile/programmer_profile.html',
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
