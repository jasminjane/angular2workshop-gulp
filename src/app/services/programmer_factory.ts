import {Programmer} from './programmer';

export class ProgrammerFactory {
	create(properties: any) {
		return new Programmer(properties.first_name, properties.last_name, properties.languages);
	}
}
