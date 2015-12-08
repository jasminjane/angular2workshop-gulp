import {Component, View, bootstrap, provide} from 'angular2/angular2';
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
		ROUTER_PROVIDERS,
		provide(LocationStrategy, { useClass: HashLocationStrategy })
	],
	myDependencies = [

	];

bootstrap(AppComponent, [...angularDependencies, ...myDependencies]);
