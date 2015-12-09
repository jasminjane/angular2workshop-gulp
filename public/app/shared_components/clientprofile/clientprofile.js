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
var client_1 = require('./client');
var ClientProfile = (function () {
    function ClientProfile() {
        this.edit = false;
        this.remove = new angular2_1.EventEmitter();
        // this.client == undefined
    }
    ClientProfile.prototype.ngOnInit = function () {
        //console.log(this.client.first_name); // Not undefined
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', client_1.Client)
    ], ClientProfile.prototype, "client", void 0);
    ClientProfile = __decorate([
        angular2_1.Component({
            selector: 'client-profile',
            events: ['remove']
        }),
        angular2_1.View({
            templateUrl: './app/shared_components/clientprofile/clientprofile.html',
            styleUrls: ['./app/shared_components/clientprofile/clientprofile.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ClientProfile);
    return ClientProfile;
})();
exports.ClientProfile = ClientProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWRfY29tcG9uZW50cy9jbGllbnRwcm9maWxlL2NsaWVudHByb2ZpbGUudHMiXSwibmFtZXMiOlsiQ2xpZW50UHJvZmlsZSIsIkNsaWVudFByb2ZpbGUuY29uc3RydWN0b3IiLCJDbGllbnRQcm9maWxlLm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx5QkFBMkQsbUJBQW1CLENBQUMsQ0FBQTtBQUMvRSx1QkFBcUIsVUFBVSxDQUFDLENBQUE7QUFHaEM7SUFZQ0E7UUFGQUMsU0FBSUEsR0FBWUEsS0FBS0EsQ0FBQ0E7UUFDdEJBLFdBQU1BLEdBQXlCQSxJQUFJQSx1QkFBWUEsRUFBRUEsQ0FBQ0E7UUFFakRBLDJCQUEyQkE7SUFDNUJBLENBQUNBO0lBQ0RELGdDQUFRQSxHQUFSQTtRQUNDRSx1REFBdURBO0lBQ3hEQSxDQUFDQTtJQVJERjtRQUFDQSxnQkFBS0EsRUFBRUE7O09BQUNBLGlDQUFNQSxVQUFTQTtJQVR6QkE7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1ZBLFFBQVFBLEVBQUVBLGdCQUFnQkE7WUFDMUJBLE1BQU1BLEVBQUVBLENBQUNBLFFBQVFBLENBQUNBO1NBQ2xCQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNMQSxXQUFXQSxFQUFFQSwwREFBMERBO1lBQ3ZFQSxTQUFTQSxFQUFFQSxDQUFDQSx5REFBeURBLENBQUNBO1NBQ3RFQSxDQUFDQTs7c0JBV0RBO0lBQURBLG9CQUFDQTtBQUFEQSxDQWxCQSxBQWtCQ0EsSUFBQTtBQVZZLHFCQUFhLGdCQVV6QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWRfY29tcG9uZW50cy9jbGllbnRwcm9maWxlL2NsaWVudHByb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgSW5wdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0NsaWVudH0gZnJvbSAnLi9jbGllbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NsaWVudC1wcm9maWxlJyxcblx0ZXZlbnRzOiBbJ3JlbW92ZSddXG59KVxuQFZpZXcoe1xuXHR0ZW1wbGF0ZVVybDogJy4vYXBwL3NoYXJlZF9jb21wb25lbnRzL2NsaWVudHByb2ZpbGUvY2xpZW50cHJvZmlsZS5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vYXBwL3NoYXJlZF9jb21wb25lbnRzL2NsaWVudHByb2ZpbGUvY2xpZW50cHJvZmlsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDbGllbnRQcm9maWxlIGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgY2xpZW50OiBDbGllbnQ7XG5cdGVkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVtb3ZlOiBFdmVudEVtaXR0ZXI8Q2xpZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Ly8gdGhpcy5jbGllbnQgPT0gdW5kZWZpbmVkXG5cdH1cblx0bmdPbkluaXQoKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzLmNsaWVudC5maXJzdF9uYW1lKTsgLy8gTm90IHVuZGVmaW5lZFxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
