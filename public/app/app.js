var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var clients_1 = require('./components/clients/clients');
var programmers_1 = require('./components/programmers/programmers');
var combined_1 = require('./components/combined/combined');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            template: "\n\t\t<a [router-link]=\"['/Clients']\">Clients</a>\n\t\t<a [router-link]=\"['/Programmers']\">Programmers</a>\n\t\t<a [router-link]=\"['/Combined']\">Combined</a>\n\t\t<router-outlet></router-outlet>\n\t",
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        }),
        router_1.RouteConfig([
            { path: '/clients', component: clients_1.ClientComponent, as: 'Clients' },
            { path: '/programmers', component: programmers_1.ProgrammerComponent, as: 'Programmers' },
            { path: '/combined', component: combined_1.CombinedComponent, as: 'Combined' }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
//noinspection TypeScriptValidateTypes
angular2_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS,
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx5QkFBMEQsbUJBQW1CLENBQUMsQ0FBQTtBQUM5RSxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFDN0MsdUJBQThHLGlCQUFpQixDQUFDLENBQUE7QUFFaEksd0JBQXlDLDhCQUE4QixDQUFDLENBQUE7QUFDeEUsNEJBQWdELHNDQUFzQyxDQUFDLENBQUE7QUFDdkYseUJBQTRDLGdDQUFnQyxDQUFDLENBQUE7QUFFN0U7SUFtQkNBO0lBQ0FDLENBQUNBO0lBcEJGRDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVkEsUUFBUUEsRUFBRUEsUUFBUUE7U0FDbEJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0xBLFFBQVFBLEVBQ1JBLDhNQUtDQTtZQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSxxQkFBWUEsRUFBRUEsbUJBQVVBLENBQUNBO1NBQ3RDQSxDQUFDQTtRQUNEQSxvQkFBV0EsQ0FBQ0E7WUFDWEEsRUFBRUEsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsU0FBU0EsRUFBRUEseUJBQU9BLEVBQUVBLEVBQUVBLEVBQUVBLFNBQVNBLEVBQUVBO1lBQ3ZEQSxFQUFFQSxJQUFJQSxFQUFFQSxjQUFjQSxFQUFFQSxTQUFTQSxFQUFFQSxpQ0FBVUEsRUFBRUEsRUFBRUEsRUFBRUEsYUFBYUEsRUFBRUE7WUFDbEVBLEVBQUVBLElBQUlBLEVBQUVBLFdBQVdBLEVBQUVBLFNBQVNBLEVBQUVBLDRCQUFRQSxFQUFFQSxFQUFFQSxFQUFFQSxVQUFVQSxFQUFFQTtTQUMzREEsQ0FBQ0E7O3FCQUlEQTtJQUFEQSxtQkFBQ0E7QUFBREEsQ0FyQkEsQUFxQkNBLElBQUE7QUFFRCxzQ0FBc0M7QUFDdEMsb0JBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxxQkFBYyxFQUFFLHlCQUFnQjtJQUN4RCxrQkFBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUUsUUFBUSxFQUFFLDZCQUFvQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwLCBDb21wb25lbnQsIFZpZXcsIHByb3ZpZGUsIE91dHB1dH0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5LCBSb3V0ZUNvbmZpZywgUm91dGVyTGluaywgUm91dGVyT3V0bGV0LCBST1VURVJfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtQZW9wbGVTZXJ2aWNlfSBmcm9tICcuL3V0aWxzL3Blb3BsZVNlcnZpY2UnXG5pbXBvcnQge0NsaWVudENvbXBvbmVudCBhcyBDbGllbnRzfSBmcm9tICcuL2NvbXBvbmVudHMvY2xpZW50cy9jbGllbnRzJztcbmltcG9ydCB7UHJvZ3JhbW1lckNvbXBvbmVudCBhcyBQcm9ncmFtbWVyfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZ3JhbW1lcnMvcHJvZ3JhbW1lcnMnO1xuaW1wb3J0IHtDb21iaW5lZENvbXBvbmVudCBhcyBDb21iaW5lZH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbWJpbmVkL2NvbWJpbmVkJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktYXBwJ1xufSlcbkBWaWV3KHtcblx0dGVtcGxhdGU6XG5cdGBcblx0XHQ8YSBbcm91dGVyLWxpbmtdPVwiWycvQ2xpZW50cyddXCI+Q2xpZW50czwvYT5cblx0XHQ8YSBbcm91dGVyLWxpbmtdPVwiWycvUHJvZ3JhbW1lcnMnXVwiPlByb2dyYW1tZXJzPC9hPlxuXHRcdDxhIFtyb3V0ZXItbGlua109XCJbJy9Db21iaW5lZCddXCI+Q29tYmluZWQ8L2E+XG5cdFx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuXHRgLFxuXHRkaXJlY3RpdmVzOiBbUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG5cdFx0eyBwYXRoOiAnL2NsaWVudHMnLCBjb21wb25lbnQ6IENsaWVudHMsIGFzOiAnQ2xpZW50cycgfSxcblx0XHR7IHBhdGg6ICcvcHJvZ3JhbW1lcnMnLCBjb21wb25lbnQ6IFByb2dyYW1tZXIsIGFzOiAnUHJvZ3JhbW1lcnMnIH0sXG5cdFx0eyBwYXRoOiAnL2NvbWJpbmVkJywgY29tcG9uZW50OiBDb21iaW5lZCwgYXM6ICdDb21iaW5lZCcgfVxuXSlcbmNsYXNzIEFwcENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG59XG5cbi8vbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRWYWxpZGF0ZVR5cGVzXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbSFRUUF9QUk9WSURFUlMsIFJPVVRFUl9QUk9WSURFUlMsXG5cdHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwgeyB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSldKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
