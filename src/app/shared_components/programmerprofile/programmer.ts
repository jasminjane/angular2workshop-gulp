import {Person, Factory} from '../../utils/person';

export class ProgrammerFactory extends Factory{
	create(properties: any): Programmer {
		return new Programmer(properties.first_name, properties.last_name, properties.languages);
	}
}

export class Programmer extends Person {
	constructor(first_name: string, last_name: string, public languages: Array<string> = []) {
		super(first_name, last_name);
	}
}
