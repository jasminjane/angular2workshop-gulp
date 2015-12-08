import {Component, View, provide, Injectable} from 'angular2/angular2';
import {PeopleService} from '../../utils/peopleService';
import {Person} from '../../utils/person';
import {Client, ClientFactory} from '../../shared_components/clientprofile/client';
import {ClientProfile} from '../../shared_components/clientprofile/clientprofile';
import {Factory} from "../../utils/person";

@Component({
	selector: 'clients',
	providers: [PeopleService, provide(Factory, { useClass: ClientFactory })]
})
@View({
	templateUrl: './app/components/clients/clients.html',
	directives: [ClientProfile],
	styles: [`.client-profile {
		width: 20em;
	}`]
})
export class ClientComponent {
	clients: Client[];
	constructor(public ClientService: PeopleService) {
		ClientService.json('clients.json')
			.subscribe(
				res => this.clients = res,
				err => console.log(err),
				() => console.log('loaded')
			);
	}
	add(first_name, last_name) {
		let newClient: Client = this.ClientService.create({ first_name, last_name });
		this.clients.push(newClient);
	}
	remove(client) {
		let index = this.clients.indexOf(client);
		this.clients.splice(index, 1);
	}
}
