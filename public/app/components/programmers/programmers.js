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
var programmer_1 = require('../../shared_components/programmerprofile/programmer');
var programmerprofile_1 = require('../../shared_components/programmerprofile/programmerprofile');
var ProgrammerComponent = (function () {
    function ProgrammerComponent(ProgrammerService) {
        var _this = this;
        ProgrammerService.json('programmers.json')
            .subscribe(function (res) { return _this.programmers = res; }, function (err) { return console.log(err); });
    }
    ProgrammerComponent.prototype.remove = function (programmer) {
        var index = this.programmers.indexOf(programmer);
        this.programmers.splice(index, 1);
    };
    ProgrammerComponent = __decorate([
        angular2_1.Component({
            selector: 'programmers',
            providers: [peopleService_1.PeopleService, angular2_1.provide(person_1.Factory, { useClass: programmer_1.ProgrammerFactory })]
        }),
        angular2_1.View({
            templateUrl: './app/components/programmers/programmers.html',
            directives: [programmerprofile_1.ProgrammerProfile]
        }), 
        __metadata('design:paramtypes', [peopleService_1.PeopleService])
    ], ProgrammerComponent);
    return ProgrammerComponent;
})();
exports.ProgrammerComponent = ProgrammerComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2dyYW1tZXJzL3Byb2dyYW1tZXJzLnRzIl0sIm5hbWVzIjpbIlByb2dyYW1tZXJDb21wb25lbnQiLCJQcm9ncmFtbWVyQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiUHJvZ3JhbW1lckNvbXBvbmVudC5yZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHlCQUF1QyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzNELDhCQUE0QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3hELHVCQUFzQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzNDLDJCQUE0QyxzREFBc0QsQ0FBQyxDQUFBO0FBQ25HLGtDQUFnQyw2REFBNkQsQ0FBQyxDQUFBO0FBRTlGO0lBVUNBLDZCQUFZQSxpQkFBZ0NBO1FBVjdDQyxpQkFxQkNBO1FBVkNBLGlCQUFpQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQTthQUN4Q0EsU0FBU0EsQ0FDVEEsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsR0FBR0EsRUFBdEJBLENBQXNCQSxFQUM3QkEsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBaEJBLENBQWdCQSxDQUN2QkEsQ0FBQ0E7SUFDSkEsQ0FBQ0E7SUFDREQsb0NBQU1BLEdBQU5BLFVBQU9BLFVBQVVBO1FBQ2hCRSxJQUFJQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUNqREEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDbkNBLENBQUNBO0lBcEJGRjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVkEsUUFBUUEsRUFBRUEsYUFBYUE7WUFDdkJBLFNBQVNBLEVBQUVBLENBQUNBLDZCQUFhQSxFQUFFQSxrQkFBT0EsQ0FBQ0EsZ0JBQU9BLEVBQUVBLEVBQUVBLFFBQVFBLEVBQUVBLDhCQUFpQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7U0FDN0VBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0xBLFdBQVdBLEVBQUVBLCtDQUErQ0E7WUFDNURBLFVBQVVBLEVBQUVBLENBQUNBLHFDQUFpQkEsQ0FBQ0E7U0FDL0JBLENBQUNBOzs0QkFjREE7SUFBREEsMEJBQUNBO0FBQURBLENBckJBLEFBcUJDQSxJQUFBO0FBYlksMkJBQW1CLHNCQWEvQixDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3Byb2dyYW1tZXJzL3Byb2dyYW1tZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIHByb3ZpZGV9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7UGVvcGxlU2VydmljZX0gZnJvbSAnLi4vLi4vdXRpbHMvcGVvcGxlU2VydmljZSc7XG5pbXBvcnQge0ZhY3Rvcnl9IGZyb20gJy4uLy4uL3V0aWxzL3BlcnNvbic7XG5pbXBvcnQge1Byb2dyYW1tZXJGYWN0b3J5LCBQcm9ncmFtbWVyfSBmcm9tICcuLi8uLi9zaGFyZWRfY29tcG9uZW50cy9wcm9ncmFtbWVycHJvZmlsZS9wcm9ncmFtbWVyJztcbmltcG9ydCB7UHJvZ3JhbW1lclByb2ZpbGV9IGZyb20gJy4uLy4uL3NoYXJlZF9jb21wb25lbnRzL3Byb2dyYW1tZXJwcm9maWxlL3Byb2dyYW1tZXJwcm9maWxlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAncHJvZ3JhbW1lcnMnLFxuXHRwcm92aWRlcnM6IFtQZW9wbGVTZXJ2aWNlLCBwcm92aWRlKEZhY3RvcnksIHsgdXNlQ2xhc3M6IFByb2dyYW1tZXJGYWN0b3J5IH0pXVxufSlcbkBWaWV3KHtcblx0dGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL3Byb2dyYW1tZXJzL3Byb2dyYW1tZXJzLmh0bWwnLFxuXHRkaXJlY3RpdmVzOiBbUHJvZ3JhbW1lclByb2ZpbGVdXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyYW1tZXJDb21wb25lbnQge1xuXHRwcm9ncmFtbWVyczogUHJvZ3JhbW1lcltdO1xuXHRjb25zdHJ1Y3RvcihQcm9ncmFtbWVyU2VydmljZTogUGVvcGxlU2VydmljZSkge1xuXHRcdFByb2dyYW1tZXJTZXJ2aWNlLmpzb24oJ3Byb2dyYW1tZXJzLmpzb24nKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0cmVzID0+IHRoaXMucHJvZ3JhbW1lcnMgPSByZXMsXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXG5cdFx0XHQpO1xuXHR9XG5cdHJlbW92ZShwcm9ncmFtbWVyKSB7XG5cdFx0bGV0IGluZGV4ID0gdGhpcy5wcm9ncmFtbWVycy5pbmRleE9mKHByb2dyYW1tZXIpO1xuXHRcdHRoaXMucHJvZ3JhbW1lcnMuc3BsaWNlKGluZGV4LCAxKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
