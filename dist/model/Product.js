"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            throw new Error("Produto indisponível.");
        }
        this.available = false;
    }
}
exports.default = Product;
