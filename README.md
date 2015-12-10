# Angular 2 workshop (Gulp)

**Install**

_npm install_

**Run**

_npm run serve_

## Assignment 1
  * Create a Client class that holds the values of a [Client](../assignment_1/src/mockdata/clients.json)
  * Create a PeopleService that can retrieve json files (url as parameter).
  * Let the service return the GET function which maps its response to Client classes (no plain JS objects).
  * Let app.ts inject the created service and print the response/error of the [client mockdata](../assignment_1/src/mockdata/clients.json) request.
  * Create a ClientFactory class that has a create function which returns an instance of a Client (static functions will break Angular 2.0!).
  * Refactor PeopleService so the ClientFactory class is injected like Http and refactor the response mapping of its request handling (1. map to json. 2. (chain) map json array to Client array).

### Optional
  * Create an abstract Person class as a base for the other people (inheritance).

## Hints
Service
```javascript
@Injectable() //<-- Only when other dependencies (this case dep: Dependency) have to be resolved
export class MyService {
  constructor(dep: Dependency) {
    console.log(dep)
  }
}

var AppComponent = Type;

```
App
```javascript
bootstrap(AppComponent, [MyService, Dependency]);
```


  * [Http](https://angular.io/docs/ts/latest/api/http/Http-class.html)
  * [Class - ES6](https://angular.io/docs/ts/latest/api/core/Class-function.html)
  * [ES6 Cheatsheet](http://es6-features.org/#Constants)
