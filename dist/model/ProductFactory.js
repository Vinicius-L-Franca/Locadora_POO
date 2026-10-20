"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = __importDefault(require("../model/Movie"));
const Game_1 = __importDefault(require("../model/Game"));
const Series_1 = __importDefault(require("../model/Series"));
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
