var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var person_1 = require('../../utils/person');
var ProgrammerFactory = (function (_super) {
    __extends(ProgrammerFactory, _super);
    function ProgrammerFactory() {
        _super.apply(this, arguments);
    }
    ProgrammerFactory.prototype.create = function (properties) {
        return new Programmer(properties.first_name, properties.last_name, properties.languages);
    };
    return ProgrammerFactory;
})(person_1.Factory);
exports.ProgrammerFactory = ProgrammerFactory;
var Programmer = (function (_super) {
    __extends(Programmer, _super);
    function Programmer(first_name, last_name, languages) {
        if (languages === void 0) { languages = []; }
        _super.call(this, first_name, last_name);
        this.languages = languages;
    }
    return Programmer;
})(person_1.Person);
exports.Programmer = Programmer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWRfY29tcG9uZW50cy9wcm9ncmFtbWVycHJvZmlsZS9wcm9ncmFtbWVyLnRzIl0sIm5hbWVzIjpbIlByb2dyYW1tZXJGYWN0b3J5IiwiUHJvZ3JhbW1lckZhY3RvcnkuY29uc3RydWN0b3IiLCJQcm9ncmFtbWVyRmFjdG9yeS5jcmVhdGUiLCJQcm9ncmFtbWVyIiwiUHJvZ3JhbW1lci5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx1QkFBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUVuRDtJQUF1Q0EscUNBQU9BO0lBQTlDQTtRQUF1Q0MsOEJBQU9BO0lBSTlDQSxDQUFDQTtJQUhBRCxrQ0FBTUEsR0FBTkEsVUFBT0EsVUFBZUE7UUFDckJFLE1BQU1BLENBQUNBLElBQUlBLFVBQVVBLENBQUNBLFVBQVVBLENBQUNBLFVBQVVBLEVBQUVBLFVBQVVBLENBQUNBLFNBQVNBLEVBQUVBLFVBQVVBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO0lBQzFGQSxDQUFDQTtJQUNGRix3QkFBQ0E7QUFBREEsQ0FKQSxBQUlDQSxFQUpzQyxnQkFBTyxFQUk3QztBQUpZLHlCQUFpQixvQkFJN0IsQ0FBQTtBQUVEO0lBQWdDRyw4QkFBTUE7SUFDckNBLG9CQUFZQSxVQUFrQkEsRUFBRUEsU0FBaUJBLEVBQVNBLFNBQTZCQTtRQUFwQ0MseUJBQW9DQSxHQUFwQ0EsY0FBb0NBO1FBQ3RGQSxrQkFBTUEsVUFBVUEsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFENEJBLGNBQVNBLEdBQVRBLFNBQVNBLENBQW9CQTtJQUV2RkEsQ0FBQ0E7SUFDRkQsaUJBQUNBO0FBQURBLENBSkEsQUFJQ0EsRUFKK0IsZUFBTSxFQUlyQztBQUpZLGtCQUFVLGFBSXRCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZF9jb21wb25lbnRzL3Byb2dyYW1tZXJwcm9maWxlL3Byb2dyYW1tZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BlcnNvbiwgRmFjdG9yeX0gZnJvbSAnLi4vLi4vdXRpbHMvcGVyc29uJztcblxuZXhwb3J0IGNsYXNzIFByb2dyYW1tZXJGYWN0b3J5IGV4dGVuZHMgRmFjdG9yeXtcblx0Y3JlYXRlKHByb3BlcnRpZXM6IGFueSk6IFByb2dyYW1tZXIge1xuXHRcdHJldHVybiBuZXcgUHJvZ3JhbW1lcihwcm9wZXJ0aWVzLmZpcnN0X25hbWUsIHByb3BlcnRpZXMubGFzdF9uYW1lLCBwcm9wZXJ0aWVzLmxhbmd1YWdlcyk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb2dyYW1tZXIgZXh0ZW5kcyBQZXJzb24ge1xuXHRjb25zdHJ1Y3RvcihmaXJzdF9uYW1lOiBzdHJpbmcsIGxhc3RfbmFtZTogc3RyaW5nLCBwdWJsaWMgbGFuZ3VhZ2VzOiBBcnJheTxzdHJpbmc+ID0gW10pIHtcblx0XHRzdXBlcihmaXJzdF9uYW1lLCBsYXN0X25hbWUpO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
