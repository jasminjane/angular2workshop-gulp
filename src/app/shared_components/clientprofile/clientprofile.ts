import {Component, View, Input, EventEmitter, OnInit} from 'angular2/angular2';
import {Client} from './client';


@Component({
	selector: 'client-profile',
	events: ['remove']
})
@View({
	templateUrl: './app/shared_components/clientprofile/clientprofile.html',
	styleUrls: ['./app/shared_components/clientprofile/clientprofile.css']
})
export class ClientProfile implements OnInit {
	@Input() client: Client;
	edit: boolean = false;
	remove: EventEmitter<Client> = new EventEmitter();
	constructor() {
		// this.client == undefined
	}
	ngOnInit() {
		//console.log(this.client.first_name); // Not undefined
	}
}
