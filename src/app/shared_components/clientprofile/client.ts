import {Person, Factory} from '../../utils/person';

export class ClientFactory extends Factory {
	create(properties) {
		return new Client(properties.first_name, properties.last_name);
	}
}

export class Client extends Person {
	constructor(first_name: string, last_name: string) {
		super(first_name, last_name);
	}
}