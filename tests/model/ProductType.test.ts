import { ProductType, parseProductType } from "../../src/model/ProductType";

describe("ProductType", () => {
  it("parseProductType deve converter strings válidas", () => {
    expect(parseProductType("filme")).toBe(ProductType.Movie);
    expect(parseProductType("jogo")).toBe(ProductType.Game);
    expect(parseProductType("serie")).toBe(ProductType.Serie);
  });

  it("parseProductType deve lançar erro para string inválida", () => {
    expect(() => parseProductType("livro")).toThrow('Tipo "livro" inválido.');
  });
});
