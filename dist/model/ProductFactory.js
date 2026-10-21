"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = require("../model/Movie");
const Game_1 = require("../model/Game");
const Series_1 = require("../model/Series");
class ProductFactory {
    static create(type) {
        switch (type) {
            case "filme":
                return new Movie_1.default();
            case "jogo":
                return new Game_1.default();
            case "serie":
                return new Series_1.default();
            default:
                throw new Error("Tipo inválido");
        }
    }
}
exports.default = ProductFactory;
