import {Client} from './client';

export class Programmer extends Client {
	languages: Array<string>;
	constructor(first_name: string, last_name: string, languages: Array<string> = []) {
		super(first_name, last_name);
		this.languages = languages;
	}
}