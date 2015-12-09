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
var person_1 = require('../../utils/person');
var clientprofile_1 = require('../../shared_components/clientprofile/clientprofile');
var client_1 = require('../../shared_components/clientprofile/client');
var programmer_1 = require('../../shared_components/programmerprofile/programmer');
var programmerprofile_1 = require('../../shared_components/programmerprofile/programmerprofile');
var CombinedComponent = (function () {
    function CombinedComponent(PeopleService) {
        var _this = this;
        this.people = [];
        var factories = [
            {
                // ClientFactory
                index: 0,
                url: 'clients.json'
            },
            {
                // ProgrammerFactory
                index: 1,
                url: 'programmers.json'
            }
        ];
        factories.forEach(function (factory) {
            PeopleService.json(factory.url, factory.index).subscribe(function (people) {
                _this.people = _this.people.concat(people);
                _this.people.sort(sortByName);
            }, function (err) { return console.log(err); });
        });
    }
    CombinedComponent.prototype.isProgrammer = function (p) {
        return p instanceof programmer_1.Programmer;
    };
    CombinedComponent.prototype.remove = function (p) {
        var index = this.people.indexOf(p);
        this.people.splice(index, 1);
    };
    CombinedComponent = __decorate([
        angular2_1.Component({
            selector: 'both',
            providers: [
                peopleService_1.PeopleService,
                angular2_1.provide(person_1.Factory, { useClass: client_1.ClientFactory, multi: true }),
                angular2_1.provide(person_1.Factory, { useClass: programmer_1.ProgrammerFactory, multi: true })
            ]
        }),
        angular2_1.View({
            templateUrl: './app/components/combined/combined.html',
            styles: ["\n\t\t.person {\n\t\t\t//background-color: blue;\n\t\t\tmin-height: 6em;\n\t\t}\n\t\t.programmer {\n\t\t\t//background-color: red;\n\t\t}\n\t\t#combinedList {\n\t\t\twidth: 20em;\n\t\t}\n\t"],
            directives: [clientprofile_1.ClientProfile, programmerprofile_1.ProgrammerProfile]
        }), 
        __metadata('design:paramtypes', [peopleService_1.PeopleService])
    ], CombinedComponent);
    return CombinedComponent;
})();
exports.CombinedComponent = CombinedComponent;
function sortByName(a, b) {
    if (a.getDisplayName() < b.getDisplayName()) {
        return -1;
    }
    if (a.getDisplayName() > b.getDisplayName()) {
        return 1;
    }
    return 0;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NvbWJpbmVkL2NvbWJpbmVkLnRzIl0sIm5hbWVzIjpbIkNvbWJpbmVkQ29tcG9uZW50IiwiQ29tYmluZWRDb21wb25lbnQuY29uc3RydWN0b3IiLCJDb21iaW5lZENvbXBvbmVudC5pc1Byb2dyYW1tZXIiLCJDb21iaW5lZENvbXBvbmVudC5yZW1vdmUiLCJzb3J0QnlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx5QkFBdUMsbUJBQW1CLENBQUMsQ0FBQTtBQUMzRCw4QkFBNEIsMkJBQTJCLENBQUMsQ0FBQTtBQUN4RCx1QkFBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUduRCw4QkFBNEIscURBQXFELENBQUMsQ0FBQTtBQUNsRix1QkFBNEIsOENBQThDLENBQUMsQ0FBQTtBQUMzRSwyQkFBNEMsc0RBQXNELENBQUMsQ0FBQTtBQUNuRyxrQ0FBZ0MsNkRBQTZELENBQUMsQ0FBQTtBQUU5RjtJQTBCQ0EsMkJBQVlBLGFBQTRCQTtRQTFCekNDLGlCQXdEQ0E7UUEvQlFBLFdBQU1BLEdBQWtCQSxFQUFFQSxDQUFDQTtRQUVsQ0EsSUFBTUEsU0FBU0EsR0FBR0E7WUFDakJBO2dCQUNDQSxnQkFBZ0JBO2dCQUNoQkEsS0FBS0EsRUFBRUEsQ0FBQ0E7Z0JBQ1JBLEdBQUdBLEVBQUVBLGNBQWNBO2FBQ25CQTtZQUNEQTtnQkFDQ0Esb0JBQW9CQTtnQkFDcEJBLEtBQUtBLEVBQUVBLENBQUNBO2dCQUNSQSxHQUFHQSxFQUFFQSxrQkFBa0JBO2FBQ3ZCQTtTQUNEQSxDQUFDQTtRQUNGQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxPQUFPQTtZQUN6QkEsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsRUFBRUEsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FDdkRBLFVBQUFBLE1BQU1BO2dCQUNMQSxLQUFJQSxDQUFDQSxNQUFNQSxHQUFPQSxLQUFJQSxDQUFDQSxNQUFNQSxRQUFLQSxNQUFNQSxDQUFDQSxDQUFDQTtnQkFDMUNBLEtBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1lBQzlCQSxDQUFDQSxFQUNEQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFoQkEsQ0FBZ0JBLENBQ3ZCQSxDQUFDQTtRQUNIQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNKQSxDQUFDQTtJQUNERCx3Q0FBWUEsR0FBWkEsVUFBYUEsQ0FBU0E7UUFDckJFLE1BQU1BLENBQUNBLENBQUNBLFlBQVlBLHVCQUFVQSxDQUFDQTtJQUNoQ0EsQ0FBQ0E7SUFDREYsa0NBQU1BLEdBQU5BLFVBQU9BLENBQVNBO1FBQ2ZHLElBQUlBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ25DQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUM5QkEsQ0FBQ0E7SUF2REZIO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNWQSxRQUFRQSxFQUFFQSxNQUFNQTtZQUNoQkEsU0FBU0EsRUFBRUE7Z0JBQ1ZBLDZCQUFhQTtnQkFDYkEsa0JBQU9BLENBQUNBLGdCQUFPQSxFQUFFQSxFQUFFQSxRQUFRQSxFQUFFQSxzQkFBYUEsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsRUFBRUEsQ0FBQ0E7Z0JBQzFEQSxrQkFBT0EsQ0FBQ0EsZ0JBQU9BLEVBQUVBLEVBQUVBLFFBQVFBLEVBQUVBLDhCQUFpQkEsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsRUFBRUEsQ0FBQ0E7YUFDOURBO1NBQ0RBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0xBLFdBQVdBLEVBQUVBLHlDQUF5Q0E7WUFDdERBLE1BQU1BLEVBQUVBLENBQUNBLCtMQVdSQSxDQUFDQTtZQUNGQSxVQUFVQSxFQUFFQSxDQUFDQSw2QkFBYUEsRUFBRUEscUNBQWlCQSxDQUFDQTtTQUM5Q0EsQ0FBQ0E7OzBCQWlDREE7SUFBREEsd0JBQUNBO0FBQURBLENBeERBLEFBd0RDQSxJQUFBO0FBaENZLHlCQUFpQixvQkFnQzdCLENBQUE7QUFFRCxvQkFBb0IsQ0FBUyxFQUFFLENBQVM7SUFDdkNJLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLGNBQWNBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1FBQzdDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNYQSxDQUFDQTtJQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxjQUFjQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUM3Q0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDVkEsQ0FBQ0E7SUFDREEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7QUFDVkEsQ0FBQ0EiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvY29tYmluZWQvY29tYmluZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgcHJvdmlkZX0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtQZW9wbGVTZXJ2aWNlfSBmcm9tICcuLi8uLi91dGlscy9wZW9wbGVTZXJ2aWNlJztcbmltcG9ydCB7UGVyc29uLCBGYWN0b3J5fSBmcm9tICcuLi8uLi91dGlscy9wZXJzb24nO1xuaW1wb3J0IHtDbGllbnRDb21wb25lbnR9IGZyb20gJy4uL2NsaWVudHMvY2xpZW50cyc7XG5pbXBvcnQge1Byb2dyYW1tZXJDb21wb25lbnR9IGZyb20gJy4uL3Byb2dyYW1tZXJzL3Byb2dyYW1tZXJzJztcbmltcG9ydCB7Q2xpZW50UHJvZmlsZX0gZnJvbSAnLi4vLi4vc2hhcmVkX2NvbXBvbmVudHMvY2xpZW50cHJvZmlsZS9jbGllbnRwcm9maWxlJztcbmltcG9ydCB7Q2xpZW50RmFjdG9yeX0gZnJvbSAnLi4vLi4vc2hhcmVkX2NvbXBvbmVudHMvY2xpZW50cHJvZmlsZS9jbGllbnQnO1xuaW1wb3J0IHtQcm9ncmFtbWVyLCBQcm9ncmFtbWVyRmFjdG9yeX0gZnJvbSAnLi4vLi4vc2hhcmVkX2NvbXBvbmVudHMvcHJvZ3JhbW1lcnByb2ZpbGUvcHJvZ3JhbW1lcic7XG5pbXBvcnQge1Byb2dyYW1tZXJQcm9maWxlfSBmcm9tICcuLi8uLi9zaGFyZWRfY29tcG9uZW50cy9wcm9ncmFtbWVycHJvZmlsZS9wcm9ncmFtbWVycHJvZmlsZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2JvdGgnLFxuXHRwcm92aWRlcnM6IFtcblx0XHRQZW9wbGVTZXJ2aWNlLFxuXHRcdHByb3ZpZGUoRmFjdG9yeSwgeyB1c2VDbGFzczogQ2xpZW50RmFjdG9yeSwgbXVsdGk6IHRydWUgfSksXG5cdFx0cHJvdmlkZShGYWN0b3J5LCB7IHVzZUNsYXNzOiBQcm9ncmFtbWVyRmFjdG9yeSwgbXVsdGk6IHRydWUgfSlcblx0XVxufSlcbkBWaWV3KHtcblx0dGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL2NvbWJpbmVkL2NvbWJpbmVkLmh0bWwnLFxuXHRzdHlsZXM6IFtgXG5cdFx0LnBlcnNvbiB7XG5cdFx0XHQvL2JhY2tncm91bmQtY29sb3I6IGJsdWU7XG5cdFx0XHRtaW4taGVpZ2h0OiA2ZW07XG5cdFx0fVxuXHRcdC5wcm9ncmFtbWVyIHtcblx0XHRcdC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuXHRcdH1cblx0XHQjY29tYmluZWRMaXN0IHtcblx0XHRcdHdpZHRoOiAyMGVtO1xuXHRcdH1cblx0YF0sXG5cdGRpcmVjdGl2ZXM6IFtDbGllbnRQcm9maWxlLCBQcm9ncmFtbWVyUHJvZmlsZV1cbn0pXG5leHBvcnQgY2xhc3MgQ29tYmluZWRDb21wb25lbnQge1xuXHRwcml2YXRlIHBlb3BsZTogQXJyYXk8UGVyc29uPiA9IFtdO1xuXHRjb25zdHJ1Y3RvcihQZW9wbGVTZXJ2aWNlOiBQZW9wbGVTZXJ2aWNlKSB7XG5cdFx0Y29uc3QgZmFjdG9yaWVzID0gW1xuXHRcdFx0e1xuXHRcdFx0XHQvLyBDbGllbnRGYWN0b3J5XG5cdFx0XHRcdGluZGV4OiAwLFxuXHRcdFx0XHR1cmw6ICdjbGllbnRzLmpzb24nXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQvLyBQcm9ncmFtbWVyRmFjdG9yeVxuXHRcdFx0XHRpbmRleDogMSxcblx0XHRcdFx0dXJsOiAncHJvZ3JhbW1lcnMuanNvbidcblx0XHRcdH1cblx0XHRdO1xuXHRcdGZhY3Rvcmllcy5mb3JFYWNoKChmYWN0b3J5KSA9PiB7XG5cdFx0XHRQZW9wbGVTZXJ2aWNlLmpzb24oZmFjdG9yeS51cmwsIGZhY3RvcnkuaW5kZXgpLnN1YnNjcmliZShcblx0XHRcdFx0cGVvcGxlID0+IHtcblx0XHRcdFx0XHR0aGlzLnBlb3BsZSA9IFsuLi50aGlzLnBlb3BsZSwgLi4ucGVvcGxlXTtcblx0XHRcdFx0XHR0aGlzLnBlb3BsZS5zb3J0KHNvcnRCeU5hbWUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coZXJyKVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXHRpc1Byb2dyYW1tZXIocDogUGVyc29uKSB7XG5cdFx0cmV0dXJuIHAgaW5zdGFuY2VvZiBQcm9ncmFtbWVyO1xuXHR9XG5cdHJlbW92ZShwOiBQZXJzb24pIHtcblx0XHRsZXQgaW5kZXggPSB0aGlzLnBlb3BsZS5pbmRleE9mKHApO1xuXHRcdHRoaXMucGVvcGxlLnNwbGljZShpbmRleCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc29ydEJ5TmFtZShhOiBQZXJzb24sIGI6IFBlcnNvbikge1xuXHRpZiAoYS5nZXREaXNwbGF5TmFtZSgpIDwgYi5nZXREaXNwbGF5TmFtZSgpKSB7XG5cdFx0cmV0dXJuIC0xO1xuXHR9XG5cdGlmIChhLmdldERpc3BsYXlOYW1lKCkgPiBiLmdldERpc3BsYXlOYW1lKCkpIHtcblx0XHRyZXR1cm4gMTtcblx0fVxuXHRyZXR1cm4gMDtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
