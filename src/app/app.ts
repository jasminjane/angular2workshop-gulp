import {bootstrap, Component, View, provide, Output} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {LocationStrategy, HashLocationStrategy, RouteConfig, RouterLink, RouterOutlet, ROUTER_PROVIDERS} from 'angular2/router';
import {PeopleService} from './utils/peopleService'
import {ClientComponent as Clients} from './components/clients/clients';
import {ProgrammerComponent as Programmer} from './components/programmers/programmers';
import {CombinedComponent as Combined} from './components/combined/combined';

@Component({
	selector: 'my-app'
})
@View({
	template:
	`
		<a [router-link]="['/Clients']">Clients</a>
		<a [router-link]="['/Programmers']">Programmers</a>
		<a [router-link]="['/Combined']">Combined</a>
		<router-outlet></router-outlet>
	`,
	directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
		{ path: '/clients', component: Clients, as: 'Clients' },
		{ path: '/programmers', component: Programmer, as: 'Programmers' },
		{ path: '/combined', component: Combined, as: 'Combined' }
])
class AppComponent {
	constructor() {

	}
}

//noinspection TypeScriptValidateTypes
bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS,
	provide(LocationStrategy, { useClass: HashLocationStrategy })]);
