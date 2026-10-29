import Product from "../model/Product";
import Movie from "../model/Movie";
import Game from "../model/Game";
import Serie from "../model/Series";
import ModelError from "./Errors";
import { ProductType } from "./ProductType";

export default class ProductFactory {
  static create(type: ProductType): Product {
    switch (type) {
      case ProductType.Movie:
        return new Movie();
      case ProductType.Game:
        return new Game();
      case ProductType.Serie:
        return new Serie();
      default:
        throw ModelError.invalidProductType(type);
    }
  }
}
