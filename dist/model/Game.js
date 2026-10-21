"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
class Game extends Product_1.default {
    setPlatform(platfmorm) {
        this.platfmorm = platfmorm;
    }
    getPlatform() {
        return this.platfmorm;
    }
    register(ask) {
        this.setTitle(ask("Digite o nome do jogo"));
        this.setSalePrice(Number(ask("Digite o preço de venda")));
        this.setRentalPrice(Number(ask("Digite o preço de aluguel")));
        this.setType("jogo");
        this.setPlatform(ask("Digite a plataforma"));
    }
}
exports.default = Game;
