# Angular 2 workshop (Gulp)

**Install**

_npm install_

**Run**

_npm run serve_


## Assignment 3
  * Create a new component named ProgrammerComponent (app/components) that will hold Programmers.
  * Set up the new Router and link your components to url's.
  * Create a ProgrammerProfile that uses/extends ClientProfile.
  * Create a Programmer class that extends Person (or Client) and a ProgrammerFactory.
  * Let the ProgrammerComponent inject PeopleService and provide a ProgrammerFactory through dependency injection.
  * Visualize the programmers with ProgrammerProfiles.

## HINTS

```javascript
@Injectable()
export class MyService {
  constructor(dep: Dependency) {
    console.log(dep)
  }
}
```

```javascript
@Component({
  selector: 'my-app',
  providers: [
    MyService,
    provide(Dependency, { useClass: DifferentDependency })
  ]
})
@View({
  template: `<div>Provide example}</div>`
})
export class AppComponent {
  constructor(myService: MyService) {}
}

bootstrap(AppComponent, [HTTP_PROVIDERS, MyService]);

```

  * [CheatSheet Angular 2](https://angular.io/cheatsheet)
  * [LocationStrategy](https://angular.io/docs/ts/latest/api/router/HashLocationStrategy-class.html)
