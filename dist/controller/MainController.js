"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = __importDefault(require("../model/Movie"));
const MainScreen_1 = __importDefault(require("../view/MainScreen"));
class MainController {
    constructor(database) {
        this.database = database;
        new MainScreen_1.default(this);
    }
    getNewMovie() {
        return new Movie_1.default();
    }
    listProducts() {
        if (this.database.products.length === 0) {
            console.log("Nenhum produto cadastrado.");
            return;
        }
        for (let i = 0; i < this.database.products.length; i++) {
            const p = this.database.products[i];
            console.log(`${i + 1}. ${p.getTitle()} | ${p.getType()} | Compra: R$${p.getPurchasePrice()} | Aluguel: R$${p.getRentalPrice()}`);
        }
    }
}
exports.default = MainController;
