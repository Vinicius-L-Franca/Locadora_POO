"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductType = void 0;
exports.parseProductType = parseProductType;
var ProductType;
(function (ProductType) {
    ProductType["Movie"] = "filme";
    ProductType["Game"] = "jogo";
    ProductType["Serie"] = "serie";
})(ProductType || (exports.ProductType = ProductType = {}));
/**
 * Converte uma string vinda do usuário em ProductType.
 * Lança "Tipo inválido" se a string não corresponder a nenhum membro do enum.
 */
function parseProductType(value) {
    const type = Object.values(ProductType).find((t) => t === value);
    if (!type) {
        throw new Error("Tipo inválido");
    }
    return type;
}
