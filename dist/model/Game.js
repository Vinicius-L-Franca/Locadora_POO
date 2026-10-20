"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product"));
class Game extends Product_1.default {
    setPlatform(platfmorm) {
        this.platfmorm = platfmorm;
    }
    getPlatform() {
        return this.platfmorm;
    }
    async register(ask) {
        this.setTitle(await ask("Digite o nome do jogo"));
        this.setPurchasePrice(Number(await ask("Digite o preço de compra")));
        this.setRentalPrice(Number(await ask("Digite o preço de aluguel")));
        this.setType("jogo");
        this.setPlatform(await ask("Digite a plataforma"));
    }
}
exports.default = Game;
