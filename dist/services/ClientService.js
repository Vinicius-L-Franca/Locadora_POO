"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("../model/Client");
class ClientService {
    constructor(database) {
        this.database = database;
    }
    registerClient(name, contact) {
        const client = new Client_1.default(name, contact);
        this.database.addClient(client);
    }
    listClients() {
        return this.database.getClients();
    }
}
exports.default = ClientService;
