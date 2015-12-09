import {Programmer} from './programmer';
import {ClientFactory} from './client_factory';

export class ProgrammerFactory extends  ClientFactory{
	create(properties: any) {
		return new Programmer(properties.first_name, properties.last_name, properties.languages);
	}
}
