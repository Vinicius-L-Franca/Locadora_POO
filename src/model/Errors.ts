export default class ModelError extends Error {
  static invalidProductType(value: string): ModelError {
    return new ModelError(`Tipo "${value}" inválido.`);
  }

  static productUnavailable(title: string): ModelError {
    return new ModelError(`Produto "${title}" indisponível.`);
  }

  static productNotFound(number: number): ModelError {
    return new ModelError(`Produto de número ${number} não encontrado.`);
  }
}