"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MainController {
    constructor(productService, clientService) {
        this.productService = productService;
        this.clientService = clientService;
    }
    registerProduct(type, ask) {
        this.productService.registerProduct(type, ask);
    }
    registerClient(name, contact) {
        this.clientService.registerClient(name, contact);
    }
    listProducts() {
        return this.productService.listProducts();
    }
    purchaseProduct(index) {
        this.productService.purchaseProduct(index);
    }
    listClients() {
        return this.clientService.listClients();
    }
}
exports.default = MainController;
