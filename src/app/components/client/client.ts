import {Component, View, provide, Injectable} from 'angular2/angular2';
import {PeopleService} from '../../services/people_service';
import {Client} from '../../services/client';
import {ClientProfile} from "../../shared_components/client_profile/client_profile";

@Component({
	selector: 'clients'
})
@View({
	templateUrl: './app/components/client/client.html',
	directives: [ClientProfile]
})
export class ClientComponent {
	clientService: PeopleService;
	clients: Client[];
	active: Client;
	constructor(peopleService: PeopleService) {
		this.clientService = peopleService;
		this.clientService.json('mockdata/clients.json')
			.subscribe(
				res => this.clients = res,
				err => console.log(err)
			);
	}
	add(first_name, last_name) {
		var newClient: Client = this.clientService.factory.create({ first_name, last_name }); // http://es6-features.org/#PropertyShorthand
		this.clients.push(newClient);
	}
	remove(client) {
		let index = this.clients.indexOf(client);
		this.clients.splice(index, 1);
	}
}
