"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
class Serie extends Product_1.default {
    setEpisodes(episodes) {
        this.episodes = episodes;
    }
    getEpisodes() {
        return this.episodes;
    }
    register(ask) {
        this.setTitle(ask("Digite o nome da serie"));
        this.setSalePrice(Number(ask("Digite o preço de venda")));
        this.setRentalPrice(Number(ask("Digite o preço de aluguel")));
        this.setType("serie");
        this.setEpisodes(ask("Digite a quantidade de episódios"));
    }
}
exports.default = Serie;
