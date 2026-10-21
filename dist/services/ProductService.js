"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductFactory_1 = require("../model/ProductFactory");
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
            throw new Error("Produto não encontrado.");
        }
        product.sell();
    }
}
exports.default = ProductService;
