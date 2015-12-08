import {Component, View, provide, Injectable} from 'angular2/angular2';
import {PeopleService} from '../../services/people.service';
import {Client} from '../../services/client';

@Component({
	selector: 'clients'
})
@View({
	templateUrl: './app/components/client/client.page.html'
})
export class ClientComponent {
	clients: Client[];
	constructor(public ClientService: PeopleService) {
		ClientService.json('mockdata/clients.json')
			.subscribe(
				res => this.clients = res,
				err => console.log(err)
			);
	}
	add(first_name, last_name) {
		//let newClient: Client = this.ClientService.create({ first_name, last_name });
		//this.clients.push(newClient);
	}
	remove(client) {
		//let index = this.clients.indexOf(client);
		//this.clients.splice(index, 1);
	}
}
