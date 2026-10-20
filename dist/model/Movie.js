"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product"));
class Movie extends Product_1.default {
    setDurationInMinutes(durationInMinutes) {
        this.durationInMinutes = durationInMinutes;
    }
    getDurationInMinutes() {
        return this.durationInMinutes;
    }
    async register(ask) {
        this.setTitle(await ask("Digite o nome do filme"));
        this.setPurchasePrice(Number(await ask("Digite o preço de compra")));
        this.setRentalPrice(Number(await ask("Digite o preço de aluguel")));
        this.setType("filme");
        this.setDurationInMinutes(await ask("Digite a duração em minutos"));
    }
}
exports.default = Movie;
