import {Client} from './client';

export class ClientFactory {
	create(properties: any) {
		return new Client(properties.first_name, properties.last_name);
	}
}
