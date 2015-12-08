import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

@Component({
	selector: 'my-app'
})
@View({
	template: `Welcome to the Angular 2 workshop`
})
class AppComponent {
	constructor() {

	}
}

const angularDependencies = [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	provide(LocationStrategy, { useClass: HashLocationStrategy })
];

const myDependencies = [

];
bootstrap(AppComponent, [...angularDependencies, ...myDependencies];

