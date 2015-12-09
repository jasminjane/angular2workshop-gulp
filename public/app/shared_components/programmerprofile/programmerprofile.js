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
var programmer_1 = require('./programmer');
var clientprofile_1 = require('../clientprofile/clientprofile');
var ProgrammerProfile = (function () {
    function ProgrammerProfile() {
        this.edit = false;
        this.remove = new angular2_1.EventEmitter();
    }
    ProgrammerProfile.prototype.removeLanguage = function (index) {
        this.programmer.languages.splice(index, 1);
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', programmer_1.Programmer)
    ], ProgrammerProfile.prototype, "programmer", void 0);
    ProgrammerProfile = __decorate([
        angular2_1.Component({
            selector: 'programmer-profile',
            events: ['remove']
        }),
        angular2_1.View({
            templateUrl: './app/shared_components/programmerprofile/programmerprofile.html',
            styleUrls: ['./app/shared_components/programmerprofile/programmerprofile.css'],
            directives: [clientprofile_1.ClientProfile]
        }), 
        __metadata('design:paramtypes', [])
    ], ProgrammerProfile);
    return ProgrammerProfile;
})();
exports.ProgrammerProfile = ProgrammerProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWRfY29tcG9uZW50cy9wcm9ncmFtbWVycHJvZmlsZS9wcm9ncmFtbWVycHJvZmlsZS50cyJdLCJuYW1lcyI6WyJQcm9ncmFtbWVyUHJvZmlsZSIsIlByb2dyYW1tZXJQcm9maWxlLmNvbnN0cnVjdG9yIiwiUHJvZ3JhbW1lclByb2ZpbGUucmVtb3ZlTGFuZ3VhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHlCQUE0RCxtQkFBbUIsQ0FBQyxDQUFBO0FBQ2hGLDJCQUF5QixjQUFjLENBQUMsQ0FBQTtBQUN4Qyw4QkFBNEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUc3RDtJQUFBQTtRQVdDQyxTQUFJQSxHQUFZQSxLQUFLQSxDQUFDQTtRQUN0QkEsV0FBTUEsR0FBNkJBLElBQUlBLHVCQUFZQSxFQUFFQSxDQUFDQTtJQUl2REEsQ0FBQ0E7SUFIQUQsMENBQWNBLEdBQWRBLFVBQWVBLEtBQUtBO1FBQ25CRSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUM1Q0EsQ0FBQ0E7SUFMREY7UUFBQ0EsZ0JBQUtBLEVBQUVBOztPQUFDQSx5Q0FBVUEsVUFBYUE7SUFWakNBO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNWQSxRQUFRQSxFQUFFQSxvQkFBb0JBO1lBQzlCQSxNQUFNQSxFQUFFQSxDQUFDQSxRQUFRQSxDQUFDQTtTQUNsQkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDTEEsV0FBV0EsRUFBRUEsa0VBQWtFQTtZQUMvRUEsU0FBU0EsRUFBRUEsQ0FBQ0EsaUVBQWlFQSxDQUFDQTtZQUM5RUEsVUFBVUEsRUFBRUEsQ0FBQ0EsNkJBQWFBLENBQUNBO1NBQzNCQSxDQUFDQTs7MEJBUURBO0lBQURBLHdCQUFDQTtBQUFEQSxDQWhCQSxBQWdCQ0EsSUFBQTtBQVBZLHlCQUFpQixvQkFPN0IsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkX2NvbXBvbmVudHMvcHJvZ3JhbW1lcnByb2ZpbGUvcHJvZ3JhbW1lcnByb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgcHJvdmlkZSwgSW5wdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtQcm9ncmFtbWVyfSBmcm9tICcuL3Byb2dyYW1tZXInO1xuaW1wb3J0IHtDbGllbnRQcm9maWxlfSBmcm9tICcuLi9jbGllbnRwcm9maWxlL2NsaWVudHByb2ZpbGUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3Byb2dyYW1tZXItcHJvZmlsZScsXG5cdGV2ZW50czogWydyZW1vdmUnXVxufSlcbkBWaWV3KHtcblx0dGVtcGxhdGVVcmw6ICcuL2FwcC9zaGFyZWRfY29tcG9uZW50cy9wcm9ncmFtbWVycHJvZmlsZS9wcm9ncmFtbWVycHJvZmlsZS5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vYXBwL3NoYXJlZF9jb21wb25lbnRzL3Byb2dyYW1tZXJwcm9maWxlL3Byb2dyYW1tZXJwcm9maWxlLmNzcyddLFxuXHRkaXJlY3RpdmVzOiBbQ2xpZW50UHJvZmlsZV1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3JhbW1lclByb2ZpbGUge1xuXHRASW5wdXQoKSBwcm9ncmFtbWVyOiBQcm9ncmFtbWVyO1xuXHRlZGl0OiBib29sZWFuID0gZmFsc2U7XG5cdHJlbW92ZTogRXZlbnRFbWl0dGVyPFByb2dyYW1tZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRyZW1vdmVMYW5ndWFnZShpbmRleCkge1xuXHRcdHRoaXMucHJvZ3JhbW1lci5sYW5ndWFnZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
