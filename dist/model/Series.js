"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product"));
class Serie extends Product_1.default {
    setEpisodes(episodes) {
        this.episodes = episodes;
    }
    getEpisodes() {
        return this.episodes;
    }
    async register(ask) {
        this.setTitle(await ask("Digite o nome da serie"));
        this.setPurchasePrice(Number(await ask("Digite o preço de compra")));
        this.setRentalPrice(Number(await ask("Digite o preço de aluguel")));
        this.setType("serie");
        this.setEpisodes(await ask("Digite a quantidade de episódios"));
    }
}
exports.default = Serie;
