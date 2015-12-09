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
var peopleService_1 = require('../../utils/peopleService');
var client_1 = require('../../shared_components/clientprofile/client');
var clientprofile_1 = require('../../shared_components/clientprofile/clientprofile');
var person_1 = require("../../utils/person");
var ClientComponent = (function () {
    function ClientComponent(ClientService) {
        var _this = this;
        this.ClientService = ClientService;
        ClientService.json('clients.json')
            .subscribe(function (res) { return _this.clients = res; }, function (err) { return console.log(err); }, function () { return console.log('loaded'); });
    }
    ClientComponent.prototype.add = function (first_name, last_name) {
        var newClient = this.ClientService.create({ first_name: first_name, last_name: last_name });
        this.clients.push(newClient);
    };
    ClientComponent.prototype.remove = function (client) {
        var index = this.clients.indexOf(client);
        this.clients.splice(index, 1);
    };
    ClientComponent = __decorate([
        angular2_1.Component({
            selector: 'clients',
            providers: [peopleService_1.PeopleService, angular2_1.provide(person_1.Factory, { useClass: client_1.ClientFactory })]
        }),
        angular2_1.View({
            templateUrl: './app/components/clients/clients.html',
            directives: [clientprofile_1.ClientProfile],
            styles: [".client-profile {\n\t\twidth: 20em;\n\t}"]
        }), 
        __metadata('design:paramtypes', [peopleService_1.PeopleService])
    ], ClientComponent);
    return ClientComponent;
})();
exports.ClientComponent = ClientComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NsaWVudHMvY2xpZW50cy50cyJdLCJuYW1lcyI6WyJDbGllbnRDb21wb25lbnQiLCJDbGllbnRDb21wb25lbnQuY29uc3RydWN0b3IiLCJDbGllbnRDb21wb25lbnQuYWRkIiwiQ2xpZW50Q29tcG9uZW50LnJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEseUJBQW1ELG1CQUFtQixDQUFDLENBQUE7QUFDdkUsOEJBQTRCLDJCQUEyQixDQUFDLENBQUE7QUFFeEQsdUJBQW9DLDhDQUE4QyxDQUFDLENBQUE7QUFDbkYsOEJBQTRCLHFEQUFxRCxDQUFDLENBQUE7QUFDbEYsdUJBQXNCLG9CQUFvQixDQUFDLENBQUE7QUFFM0M7SUFhQ0EseUJBQW1CQSxhQUE0QkE7UUFiaERDLGlCQTZCQ0E7UUFoQm1CQSxrQkFBYUEsR0FBYkEsYUFBYUEsQ0FBZUE7UUFDOUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBO2FBQ2hDQSxTQUFTQSxDQUNUQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxHQUFHQSxFQUFsQkEsQ0FBa0JBLEVBQ3pCQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFoQkEsQ0FBZ0JBLEVBQ3ZCQSxjQUFNQSxPQUFBQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxDQUFDQSxFQUFyQkEsQ0FBcUJBLENBQzNCQSxDQUFDQTtJQUNKQSxDQUFDQTtJQUNERCw2QkFBR0EsR0FBSEEsVUFBSUEsVUFBVUEsRUFBRUEsU0FBU0E7UUFDeEJFLElBQUlBLFNBQVNBLEdBQVdBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLE1BQU1BLENBQUNBLEVBQUVBLFlBQUFBLFVBQVVBLEVBQUVBLFdBQUFBLFNBQVNBLEVBQUVBLENBQUNBLENBQUNBO1FBQzdFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtJQUM5QkEsQ0FBQ0E7SUFDREYsZ0NBQU1BLEdBQU5BLFVBQU9BLE1BQU1BO1FBQ1pHLElBQUlBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUMvQkEsQ0FBQ0E7SUE1QkZIO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNWQSxRQUFRQSxFQUFFQSxTQUFTQTtZQUNuQkEsU0FBU0EsRUFBRUEsQ0FBQ0EsNkJBQWFBLEVBQUVBLGtCQUFPQSxDQUFDQSxnQkFBT0EsRUFBRUEsRUFBRUEsUUFBUUEsRUFBRUEsc0JBQWFBLEVBQUVBLENBQUNBLENBQUNBO1NBQ3pFQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNMQSxXQUFXQSxFQUFFQSx1Q0FBdUNBO1lBQ3BEQSxVQUFVQSxFQUFFQSxDQUFDQSw2QkFBYUEsQ0FBQ0E7WUFDM0JBLE1BQU1BLEVBQUVBLENBQUNBLDBDQUVQQSxDQUFDQTtTQUNIQSxDQUFDQTs7d0JBbUJEQTtJQUFEQSxzQkFBQ0E7QUFBREEsQ0E3QkEsQUE2QkNBLElBQUE7QUFsQlksdUJBQWUsa0JBa0IzQixDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2NsaWVudHMvY2xpZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBwcm92aWRlLCBJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1Blb3BsZVNlcnZpY2V9IGZyb20gJy4uLy4uL3V0aWxzL3Blb3BsZVNlcnZpY2UnO1xuaW1wb3J0IHtQZXJzb259IGZyb20gJy4uLy4uL3V0aWxzL3BlcnNvbic7XG5pbXBvcnQge0NsaWVudCwgQ2xpZW50RmFjdG9yeX0gZnJvbSAnLi4vLi4vc2hhcmVkX2NvbXBvbmVudHMvY2xpZW50cHJvZmlsZS9jbGllbnQnO1xuaW1wb3J0IHtDbGllbnRQcm9maWxlfSBmcm9tICcuLi8uLi9zaGFyZWRfY29tcG9uZW50cy9jbGllbnRwcm9maWxlL2NsaWVudHByb2ZpbGUnO1xuaW1wb3J0IHtGYWN0b3J5fSBmcm9tIFwiLi4vLi4vdXRpbHMvcGVyc29uXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NsaWVudHMnLFxuXHRwcm92aWRlcnM6IFtQZW9wbGVTZXJ2aWNlLCBwcm92aWRlKEZhY3RvcnksIHsgdXNlQ2xhc3M6IENsaWVudEZhY3RvcnkgfSldXG59KVxuQFZpZXcoe1xuXHR0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvY2xpZW50cy9jbGllbnRzLmh0bWwnLFxuXHRkaXJlY3RpdmVzOiBbQ2xpZW50UHJvZmlsZV0sXG5cdHN0eWxlczogW2AuY2xpZW50LXByb2ZpbGUge1xuXHRcdHdpZHRoOiAyMGVtO1xuXHR9YF1cbn0pXG5leHBvcnQgY2xhc3MgQ2xpZW50Q29tcG9uZW50IHtcblx0Y2xpZW50czogQ2xpZW50W107XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBDbGllbnRTZXJ2aWNlOiBQZW9wbGVTZXJ2aWNlKSB7XG5cdFx0Q2xpZW50U2VydmljZS5qc29uKCdjbGllbnRzLmpzb24nKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0cmVzID0+IHRoaXMuY2xpZW50cyA9IHJlcyxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKGVyciksXG5cdFx0XHRcdCgpID0+IGNvbnNvbGUubG9nKCdsb2FkZWQnKVxuXHRcdFx0KTtcblx0fVxuXHRhZGQoZmlyc3RfbmFtZSwgbGFzdF9uYW1lKSB7XG5cdFx0bGV0IG5ld0NsaWVudDogQ2xpZW50ID0gdGhpcy5DbGllbnRTZXJ2aWNlLmNyZWF0ZSh7IGZpcnN0X25hbWUsIGxhc3RfbmFtZSB9KTtcblx0XHR0aGlzLmNsaWVudHMucHVzaChuZXdDbGllbnQpO1xuXHR9XG5cdHJlbW92ZShjbGllbnQpIHtcblx0XHRsZXQgaW5kZXggPSB0aGlzLmNsaWVudHMuaW5kZXhPZihjbGllbnQpO1xuXHRcdHRoaXMuY2xpZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
