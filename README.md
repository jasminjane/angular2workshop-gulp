# Angular 2 workshop (Gulp)

**Install**

_npm install_

**Run**

_npm run serve_

## Assignment 2
  * Create a web component named ClientComponent (in app/components) that uses the PeopleService to get its Clients. (Similar: A1.x Controller)
  * Create a web component named ClientProfile (in app/shared_components) that holds 1 client and visualizes its properties. (Similar: A1.x Directive restrict 'E')
  * Use Angular 2 directives inside the ClientComponent to loop through Clients and insert each Client into a ClientProfile component.
  * Let ClientProfile log its Client on init.
  * Realize CRUD functionality for the Clients list held by the ClientComponent, delete and update must be called/emitted by the ClientProfile.
  * For editing and creating Clients, use local variables inside the template.

```javascript
@Component({
  selector: 'my-component'
})
@View({
  template: `<div (click)="select.emit(message)">{{message}}</div>`
})
export class MyComponent {
  message: string;
  @Output select: EventEmitter<string>;
  //@Input ....
  constructor() {
    this.message = 'Click here!';
    this.select = new EventEmitter<string>()
  }
}

```
###A1
```
<directive title="Literal">
<directive title="expression">
<directive title="{{interpolate}}">

<directive select="onSelect($event)">
```

## HINTS
  * [CheatSheet Angular 2](https://angular.io/cheatsheet)
  * [CORE_DIRECTIVES](https://angular.io/docs/ts/latest/api/common/CORE_DIRECTIVES-const.html)
  * [Component Lifecycle](https://angular.io/docs/ts/latest/api/core/OnInit-interface.html)
  * [EventEmitter](https://angular.io/docs/ts/latest/api/core/EventEmitter-class.html)
  * [Input, Output](http://victorsavkin.com/post/119943127151/angular-2-template-syntax)


