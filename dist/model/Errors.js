"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModelError extends Error {
    static invalidProductType(value) {
        return new ModelError(`Tipo "${value}" inválido.`);
    }
    static productUnavailable(title) {
        return new ModelError(`Produto "${title}" indisponível.`);
    }
    static productNotFound(number) {
        return new ModelError(`Produto de número ${number} não encontrado.`);
    }
}
exports.default = ModelError;
