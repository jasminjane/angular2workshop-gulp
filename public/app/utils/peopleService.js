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
var person_1 = require('./person');
var PeopleService = (function () {
    function PeopleService(Http, Factory) {
        this.Http = Http;
        this.Factory = Factory;
    }
    PeopleService.prototype.json = function (url, index) {
        var _this = this;
        return this.Http.get(url)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            var items = [];
            res.forEach(function (item) { return items.push(_this.create(item, index)); });
            return items;
        });
    };
    ;
    PeopleService.prototype.create = function (item, index) {
        var factory = (!!this.Factory.length) ? this.Factory[index] : this.Factory;
        return factory.create(item);
    };
    PeopleService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, person_1.Factory])
    ], PeopleService);
    return PeopleService;
})();
exports.PeopleService = PeopleService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91dGlscy9wZW9wbGVTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlBlb3BsZVNlcnZpY2UiLCJQZW9wbGVTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiUGVvcGxlU2VydmljZS5qc29uIiwiUGVvcGxlU2VydmljZS5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHlCQUF1RCxtQkFBbUIsQ0FBQyxDQUFBO0FBQzNFLHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUM3Qyx1QkFBc0IsVUFBVSxDQUFDLENBQUE7QUFFakM7SUFFQ0EsdUJBQW9CQSxJQUFVQSxFQUFVQSxPQUFnQkE7UUFBcENDLFNBQUlBLEdBQUpBLElBQUlBLENBQU1BO1FBQVVBLFlBQU9BLEdBQVBBLE9BQU9BLENBQVNBO0lBQUlBLENBQUNBO0lBQzdERCw0QkFBSUEsR0FBSkEsVUFBS0EsR0FBV0EsRUFBRUEsS0FBY0E7UUFBaENFLGlCQVFDQTtRQVBBQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQTthQUN2QkEsR0FBR0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBV0EsR0FBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBdEJBLENBQXNCQSxDQUFDQTthQUNsQ0EsR0FBR0EsQ0FBQ0EsVUFBQUEsR0FBR0E7WUFDUEEsSUFBSUEsS0FBS0EsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDVkEsR0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQUEsSUFBSUEsSUFBSUEsT0FBQUEsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsRUFBcENBLENBQW9DQSxDQUFDQSxDQUFDQTtZQUNoRUEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDZEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7O0lBQ0RGLDhCQUFNQSxHQUFOQSxVQUFPQSxJQUFJQSxFQUFFQSxLQUFNQTtRQUNsQkcsSUFBSUEsT0FBT0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBT0EsSUFBSUEsQ0FBQ0EsT0FBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7UUFDbEZBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQzdCQSxDQUFDQTtJQWZGSDtRQUFDQSxxQkFBVUEsRUFBRUE7O3NCQWdCWkE7SUFBREEsb0JBQUNBO0FBQURBLENBaEJBLEFBZ0JDQSxJQUFBO0FBZlkscUJBQWEsZ0JBZXpCLENBQUEiLCJmaWxlIjoiYXBwL3V0aWxzL3Blb3BsZVNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEluamVjdG9yLCBwcm92aWRlLCBDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtGYWN0b3J5fSBmcm9tICcuL3BlcnNvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQZW9wbGVTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBIdHRwOiBIdHRwLCBwcml2YXRlIEZhY3Rvcnk6IEZhY3RvcnkpIHsgfVxuXHRqc29uKHVybDogc3RyaW5nLCBpbmRleD86IG51bWJlcikge1xuXHRcdHJldHVybiB0aGlzLkh0dHAuZ2V0KHVybClcblx0XHRcdC5tYXAocmVzID0+ICg8UmVzcG9uc2U+cmVzKS5qc29uKCkpXG5cdFx0XHQubWFwKHJlcyA9PiB7XG5cdFx0XHRcdGxldCBpdGVtcyA9IFtdO1xuXHRcdFx0XHQoPFtdPnJlcykuZm9yRWFjaChpdGVtID0+IGl0ZW1zLnB1c2godGhpcy5jcmVhdGUoaXRlbSwgaW5kZXgpKSk7XG5cdFx0XHRcdHJldHVybiBpdGVtcztcblx0XHRcdH0pO1xuXHR9O1xuXHRjcmVhdGUoaXRlbSwgaW5kZXg/KSB7XG5cdFx0bGV0IGZhY3RvcnkgPSAoISEoPGFueT50aGlzLkZhY3RvcnkpLmxlbmd0aCkgPyB0aGlzLkZhY3RvcnlbaW5kZXhdIDogdGhpcy5GYWN0b3J5O1xuXHRcdHJldHVybiBmYWN0b3J5LmNyZWF0ZShpdGVtKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
