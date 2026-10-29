import ProductFactory from "../../src/model/ProductFactory";
import Movie from "../../src/model/Movie";
import Game from "../../src/model/Game";
import Serie from "../../src/model/Series";
import { ProductType } from "../../src/model/ProductType";

describe("ProductFactory", () => {
  it("deve criar um Movie para o tipo filme", () => {
    expect(ProductFactory.create(ProductType.Movie)).toBeInstanceOf(Movie);
  });

  it("deve criar um Game para o tipo jogo", () => {
    expect(ProductFactory.create(ProductType.Game)).toBeInstanceOf(Game);
  });

  it("deve criar uma Serie para o tipo serie", () => {
    expect(ProductFactory.create(ProductType.Serie)).toBeInstanceOf(Serie);
  });

  it("deve lançar erro para tipo inválido", () => {
    expect(() => ProductFactory.create("livro" as ProductType)).toThrow(
      'Tipo "livro" inválido.'
    );
  });
});
