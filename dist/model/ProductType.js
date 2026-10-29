"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductType = void 0;
exports.parseProductType = parseProductType;
const Errors_1 = require("./Errors");
var ProductType;
(function (ProductType) {
    ProductType["Movie"] = "filme";
    ProductType["Game"] = "jogo";
    ProductType["Serie"] = "serie";
})(ProductType || (exports.ProductType = ProductType = {}));
function parseProductType(value) {
    if (value === ProductType.Movie) {
        return ProductType.Movie;
    }
    if (value === ProductType.Game) {
        return ProductType.Game;
    }
    if (value === ProductType.Serie) {
        return ProductType.Serie;
    }
    throw Errors_1.default.invalidProductType(value);
}
