"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductFactory_1 = require("../model/ProductFactory");
const Errors_1 = require("../model/Errors");
class ProductService {
    constructor(database) {
        this.database = database;
    }
    registerProduct(type, ask) {
        const product = ProductFactory_1.default.create(type);
        product.register(ask);
        this.database.addProduct(product);
    }
    listProducts() {
        return this.database.getProducts();
    }
    purchaseProduct(index) {
        const product = this.database.getProducts()[index];
        if (!product) {
            throw Errors_1.default.productNotFound();
        }
        product.sell();
    }
}
exports.default = ProductService;
