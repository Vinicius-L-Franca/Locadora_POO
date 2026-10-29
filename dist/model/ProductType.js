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
    const type = Object.values(ProductType).find((t) => t === value);
    if (!type) {
        throw Errors_1.default.invalidProductType();
    }
    return type;
}
