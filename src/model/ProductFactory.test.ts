import ProductFactory from "./ProductFactory";
import Movie from "./Movie";
import Game from "./Game";
import Serie from "./Series";

describe("ProductFactory", () => {
  it('deve criar um Movie para o tipo "filme"', () => {
    expect(ProductFactory.create("filme")).toBeInstanceOf(Movie);
  });

  it('deve criar um Game para o tipo "jogo"', () => {
    expect(ProductFactory.create("jogo")).toBeInstanceOf(Game);
  });

  it('deve criar uma Serie para o tipo "serie"', () => {
    expect(ProductFactory.create("serie")).toBeInstanceOf(Serie);
  });

  it("deve lançar erro para tipo inválido", () => {
    expect(() => ProductFactory.create("livro")).toThrow("Tipo inválido");
  });
});
