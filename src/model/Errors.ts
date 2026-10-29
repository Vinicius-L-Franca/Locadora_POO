export default class ModelError extends Error {
  static invalidProductType(): ModelError {
    return new ModelError("Tipo inválido");
  }

  static productUnavailable(): ModelError {
    return new ModelError("Produto indisponível.");
  }

  static productNotFound(): ModelError {
    return new ModelError("Produto não encontrado.");
  }
}