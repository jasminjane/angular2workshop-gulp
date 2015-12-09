var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var person_1 = require('../../utils/person');
var ClientFactory = (function (_super) {
    __extends(ClientFactory, _super);
    function ClientFactory() {
        _super.apply(this, arguments);
    }
    ClientFactory.prototype.create = function (properties) {
        return new Client(properties.first_name, properties.last_name);
    };
    return ClientFactory;
})(person_1.Factory);
exports.ClientFactory = ClientFactory;
var Client = (function (_super) {
    __extends(Client, _super);
    function Client(first_name, last_name) {
        _super.call(this, first_name, last_name);
    }
    return Client;
})(person_1.Person);
exports.Client = Client;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWRfY29tcG9uZW50cy9jbGllbnRwcm9maWxlL2NsaWVudC50cyJdLCJuYW1lcyI6WyJDbGllbnRGYWN0b3J5IiwiQ2xpZW50RmFjdG9yeS5jb25zdHJ1Y3RvciIsIkNsaWVudEZhY3RvcnkuY3JlYXRlIiwiQ2xpZW50IiwiQ2xpZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHVCQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBRW5EO0lBQW1DQSxpQ0FBT0E7SUFBMUNBO1FBQW1DQyw4QkFBT0E7SUFJMUNBLENBQUNBO0lBSEFELDhCQUFNQSxHQUFOQSxVQUFPQSxVQUFVQTtRQUNoQkUsTUFBTUEsQ0FBQ0EsSUFBSUEsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsVUFBVUEsRUFBRUEsVUFBVUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7SUFDaEVBLENBQUNBO0lBQ0ZGLG9CQUFDQTtBQUFEQSxDQUpBLEFBSUNBLEVBSmtDLGdCQUFPLEVBSXpDO0FBSlkscUJBQWEsZ0JBSXpCLENBQUE7QUFFRDtJQUE0QkcsMEJBQU1BO0lBQ2pDQSxnQkFBWUEsVUFBa0JBLEVBQUVBLFNBQWlCQTtRQUNoREMsa0JBQU1BLFVBQVVBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBO0lBQzlCQSxDQUFDQTtJQUNGRCxhQUFDQTtBQUFEQSxDQUpBLEFBSUNBLEVBSjJCLGVBQU0sRUFJakM7QUFKWSxjQUFNLFNBSWxCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZF9jb21wb25lbnRzL2NsaWVudHByb2ZpbGUvY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQZXJzb24sIEZhY3Rvcnl9IGZyb20gJy4uLy4uL3V0aWxzL3BlcnNvbic7XG5cbmV4cG9ydCBjbGFzcyBDbGllbnRGYWN0b3J5IGV4dGVuZHMgRmFjdG9yeSB7XG5cdGNyZWF0ZShwcm9wZXJ0aWVzKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGllbnQocHJvcGVydGllcy5maXJzdF9uYW1lLCBwcm9wZXJ0aWVzLmxhc3RfbmFtZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsaWVudCBleHRlbmRzIFBlcnNvbiB7XG5cdGNvbnN0cnVjdG9yKGZpcnN0X25hbWU6IHN0cmluZywgbGFzdF9uYW1lOiBzdHJpbmcpIHtcblx0XHRzdXBlcihmaXJzdF9uYW1lLCBsYXN0X25hbWUpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
