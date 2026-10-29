"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Errors_1 = require("./Errors");
class Product {
    constructor() {
        this.available = true;
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getSalePrice() {
        return this.salePrice;
    }
    setSalePrice(salePrice) {
        this.salePrice = salePrice;
    }
    getRentalPrice() {
        return this.rentalPrice;
    }
    setRentalPrice(rentalPrice) {
        this.rentalPrice = rentalPrice;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    isAvailable() {
        return this.available;
    }
    sell() {
        if (!this.available) {
            throw Errors_1.default.productUnavailable(this.title);
        }
        this.available = false;
    }
}
exports.default = Product;
