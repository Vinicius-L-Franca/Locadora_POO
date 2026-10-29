import ModelError from "./Errors";

export enum ProductType {
  Movie = "filme",
  Game = "jogo",
  Serie = "serie",
}
export function parseProductType(value: string): ProductType {
  if (value === ProductType.Movie) {
    return ProductType.Movie;
  }

  if (value === ProductType.Game) {
    return ProductType.Game;
  }

  if (value === ProductType.Serie) {
    return ProductType.Serie;
  }

  throw ModelError.invalidProductType(value);
}
