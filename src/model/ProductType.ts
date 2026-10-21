export enum ProductType {
  Movie = "filme",
  Game = "jogo",
  Serie = "serie",
}

/**
 * Converte uma string vinda do usuário em ProductType.
 * Lança "Tipo inválido" se a string não corresponder a nenhum membro do enum.
 */
export function parseProductType(value: string): ProductType {
  const type = Object.values(ProductType).find((t) => t === value);
  if (!type) {
    throw new Error("Tipo inválido");
  }
  return type;
}
