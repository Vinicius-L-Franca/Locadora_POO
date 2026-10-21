"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
class Movie extends Product_1.default {
    setDurationInMinutes(durationInMinutes) {
        this.durationInMinutes = durationInMinutes;
    }
    getDurationInMinutes() {
        return this.durationInMinutes;
    }
    register(ask) {
        this.setTitle(ask("Digite o nome do filme"));
        this.setSalePrice(Number(ask("Digite o preço de venda")));
        this.setRentalPrice(Number(ask("Digite o preço de aluguel")));
        this.setType("filme");
        this.setDurationInMinutes(ask("Digite a duração em minutos"));
    }
}
exports.default = Movie;
