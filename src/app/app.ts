import {Component, View, bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {PeopleService} from './services/people';
import {ClientFactory} from './services/client_factory';
import {ClientComponent} from './components/client/client';

@Component({
	selector: 'my-app'
})
@View({
	template: `<h3>Welcome to the Angular 2 workshop</h3><clients></clients>`,
	directives: [ClientComponent]
})
class AppComponent {
	constructor() {}
}

const angularDependencies = [
	HTTP_PROVIDERS
];

const myDependencies = [
	PeopleService,
	ClientFactory
];

bootstrap(AppComponent, [...angularDependencies, ...myDependencies]); //http://es6-features.org/#SpreadOperator
