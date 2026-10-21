"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductType_1 = require("../model/ProductType");
class MainController {
    constructor(productService, clientService) {
        this.productService = productService;
        this.clientService = clientService;
    }
    registerProduct(type, ask) {
        this.productService.registerProduct((0, ProductType_1.parseProductType)(type), ask);
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
