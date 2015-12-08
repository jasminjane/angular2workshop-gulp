import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/angular2';
import {ClientFactory} from './client_factory';

@Injectable()
export class PeopleService {
	http: Http;
	factory: ClientFactory;
	constructor(http: Http, factory: ClientFactory) {
		this.http = http;
		this.factory = factory;
	}
	json(url: string) {
		return this.http.get(url)
			.map(res => (<Response>res).json())
			.map(res => {
				let people = [];
				(<[any]>res).forEach(properties => people.push(this.factory.create(properties)));
				return people;
			});
	};
}
