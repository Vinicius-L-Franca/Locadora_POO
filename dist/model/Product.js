"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getPurchasePrice() {
        return this.purchasePrice;
    }
    setPurchasePrice(purchasePrice) {
        this.purchasePrice = purchasePrice;
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
}
exports.default = Product;
