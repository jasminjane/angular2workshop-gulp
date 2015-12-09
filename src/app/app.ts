import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {PeopleService} from './services/people_service';
import {ClientFactory} from './services/client_factory';
import {ClientComponent} from './components/client/client';
import {ProgrammerComponent} from './components/programmer/programmer';

@Component({
	selector: 'my-app'
})
@View({
	template: `<h3>Welcome to the Angular 2 workshop</h3>
	<router-outlet></router-outlet>`,
	directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
	{ path: '/clients', component: ClientComponent, as: 'Clients' },
	{ path: '/programmers', component: ProgrammerComponent, as: 'Programmers' }
])
class AppComponent {
	constructor() {}
}

const angularDependencies = [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	provide(LocationStrategy, { useClass: HashLocationStrategy })
];

const myDependencies = [
	PeopleService,
	ClientFactory
];

bootstrap(AppComponent, [...angularDependencies, ...myDependencies]); //http://es6-features.org/#SpreadOperator
