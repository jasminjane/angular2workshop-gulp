var Factory = (function () {
    function Factory() {
    }
    Factory.prototype.create = function (properties) { };
    return Factory;
})();
exports.Factory = Factory;
var Person = (function () {
    function Person(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    Person.prototype.getDisplayName = function () {
        return this.first_name[0].toUpperCase() + ". " + this.last_name;
    };
    return Person;
})();
exports.Person = Person;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91dGlscy9wZXJzb24udHMiXSwibmFtZXMiOlsiRmFjdG9yeSIsIkZhY3RvcnkuY29uc3RydWN0b3IiLCJGYWN0b3J5LmNyZWF0ZSIsIlBlcnNvbiIsIlBlcnNvbi5jb25zdHJ1Y3RvciIsIlBlcnNvbi5nZXREaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQUE7SUFFQUMsQ0FBQ0E7SUFEQUQsd0JBQU1BLEdBQU5BLFVBQU9BLFVBQWVBLElBQVFFLENBQUNBO0lBQ2hDRixjQUFDQTtBQUFEQSxDQUZBLEFBRUNBLElBQUE7QUFGcUIsZUFBTyxVQUU1QixDQUFBO0FBRUQ7SUFDQ0csZ0JBQW1CQSxVQUFrQkEsRUFBU0EsU0FBaUJBO1FBQTVDQyxlQUFVQSxHQUFWQSxVQUFVQSxDQUFRQTtRQUFTQSxjQUFTQSxHQUFUQSxTQUFTQSxDQUFRQTtJQUFHQSxDQUFDQTtJQUNuRUQsK0JBQWNBLEdBQWRBO1FBQ0NFLE1BQU1BLENBQUlBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLFdBQVdBLEVBQUVBLFVBQUtBLElBQUlBLENBQUNBLFNBQVdBLENBQUNBO0lBQ2pFQSxDQUFDQTtJQUNGRixhQUFDQTtBQUFEQSxDQUxBLEFBS0NBLElBQUE7QUFMcUIsY0FBTSxTQUszQixDQUFBIiwiZmlsZSI6ImFwcC91dGlscy9wZXJzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYWJzdHJhY3QgY2xhc3MgRmFjdG9yeSB7XG5cdGNyZWF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge31cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBlcnNvbiB7XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBmaXJzdF9uYW1lOiBzdHJpbmcsIHB1YmxpYyBsYXN0X25hbWU6IHN0cmluZykge31cblx0Z2V0RGlzcGxheU5hbWUoKTpzdHJpbmcge1xuXHRcdHJldHVybiBgJHt0aGlzLmZpcnN0X25hbWVbMF0udG9VcHBlckNhc2UoKX0uICR7dGhpcy5sYXN0X25hbWV9YDtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
