"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModelError extends Error {
    static invalidProductType() {
        return new ModelError("Tipo inválido");
    }
    static productUnavailable() {
        return new ModelError("Produto indisponível.");
    }
    static productNotFound() {
        return new ModelError("Produto não encontrado.");
    }
}
exports.default = ModelError;
