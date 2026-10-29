"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = require("../model/Movie");
const Game_1 = require("../model/Game");
const Series_1 = require("../model/Series");
const Errors_1 = require("./Errors");
const ProductType_1 = require("./ProductType");
class ProductFactory {
    static create(type) {
        switch (type) {
            case ProductType_1.ProductType.Movie:
                return new Movie_1.default();
            case ProductType_1.ProductType.Game:
                return new Game_1.default();
            case ProductType_1.ProductType.Serie:
                return new Series_1.default();
            default:
                throw Errors_1.default.invalidProductType();
        }
    }
}
exports.default = ProductFactory;
