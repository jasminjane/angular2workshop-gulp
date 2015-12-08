import {Injectable, Injector, provide, Component} from 'angular2/angular2';
import {Http, Response} from 'angular2/http';
import {Factory} from './person';

@Injectable()
export class PeopleService {
	constructor(private Http: Http, private Factory: Factory) { }
	json(url: string, index?: number) {
		return this.Http.get(url)
			.map(res => (<Response>res).json())
			.map(res => {
				let items = [];
				(<[]>res).forEach(item => items.push(this.create(item, index)));
				return items;
			});
	};
	create(item, index?) {
		let factory = (!!(<any>this.Factory).length) ? this.Factory[index] : this.Factory;
		return factory.create(item);
	}
}
