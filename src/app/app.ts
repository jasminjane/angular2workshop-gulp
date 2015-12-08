import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
	selector: 'my-app'
})
@View({
	template: `Welcome to the Angular 2 workshop`
})
class AppComponent {
	constructor() {}
}

const angularDependencies = [
	HTTP_PROVIDERS
];

const myDependencies = [

];
bootstrap(AppComponent, [...angularDependencies, ...myDependencies]); //http://es6-features.org/#SpreadOperator

