import ModelError from "./Errors";

export enum ProductType {
  Movie = "filme",
  Game = "jogo",
  Serie = "serie",
}
export function parseProductType(value: string): ProductType {
  const type = Object.values(ProductType).find((t) => t === value);
  if (!type) {
    throw ModelError.invalidProductType(value);
  }
  return type;
}
