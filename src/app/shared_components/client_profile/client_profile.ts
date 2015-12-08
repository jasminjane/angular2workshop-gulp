import {Component, View, provide, Input, OnInit, Output, EventEmitter} from 'angular2/angular2';
import {Client} from '../../services/client';


@Component({
	selector: 'client-profile',
	properties: ['client', 'selected']
	//lifecycleHooks: [OnInit]
})
@View({
	templateUrl: './app/shared_components/client_profile/client_profile.html'
})
export class ClientProfile implements OnInit {
	@Input() client: Client;
	@Input() selected: boolean;
	@Output() remove: EventEmitter<Client>;

	edit: boolean;

	constructor() {
		this.remove  = new EventEmitter();
		this.edit = false;
	}
	ngOnInit() {
		console.log(this.client);
	}
}
