"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        this.products = [];
        this.clients = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    getProducts() {
        return [...this.products];
    }
    addClient(client) {
        this.clients.push(client);
    }
    getClients() {
        return [...this.clients];
    }
}
exports.default = Database;
