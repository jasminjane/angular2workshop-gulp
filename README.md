# Angular 2 workshop (Gulp)

**Install**

_npm install_

**Run server**

_npm run start_


**Compile/Watch**

_gulp_

## Assignment 1
  * Create a Client class that holds the values of a [Client](../assignment_1/src/mockdata/clients.json)
  * Create a PeopleService that can retrieve json files.
  * Let the service return instantiated Client classes (no plain JS objects).
  * Let app.ts inject the created service and print the response/error of the [client mockdata](../assignment_1/src/mockdata/clients.json) request.
  * Create a ClientFactory class that has a create function which returns an instance of a Client.
  * Refactor PeopleService so the ClientFactory class is injected like Http and refactor the response mapping of its request handling.

### Optional
  * Create an abstract Person class as a base for the other people (inheritance).

## Hints
  * [Class - ES6](https://angular.io/docs/ts/latest/api/core/Class-function.html)
  * [Http](https://angular.io/docs/ts/latest/api/http/Http-class.html)
  * [ES6 Cheatsheet](http://es6-features.org/#Constants)
