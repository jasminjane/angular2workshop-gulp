import {Component, View, bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {PeopleService} from './services/people.service';
import {ClientFactory} from './services/client.factory';
import {ClientComponent} from './components/client/client.page';

@Component({
	selector: 'my-app'
})
@View({
	template: `Welcome to the Angular 2 workshop <clients></clients>`,
	directives: [ClientComponent]
})
class AppComponent {
	constructor(peopleService: PeopleService) {
		peopleService.json('mockdata/clients.json')
			.subscribe(
				clients => console.log(clients),
				err => console.log(err)
			);
	}
}

const angularDependencies = [
	HTTP_PROVIDERS
];

const myDependencies = [
	PeopleService,
	ClientFactory
];
bootstrap(AppComponent, [...angularDependencies, ...myDependencies]);
