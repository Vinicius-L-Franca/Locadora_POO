import Product from "../model/Product";
import Movie from "../model/Movie";
import Game from "../model/Game";
import Serie from "../model/Series";

export default class ProductFactory {
  static create(type: string): Product {
    switch (type) {
      case "filme":
        return new Movie();
      case "jogo":
        return new Game();
      case "serie":
        return new Serie();
      default:
        throw new Error("Tipo inválido");
    }
  }
}
