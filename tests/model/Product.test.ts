import Product from "../../src/model/Product";
import Movie from "../../src/model/Movie";
import { ProductType } from "../../src/model/ProductType";

class FakeProduct extends Product {
  register(): void {}
}

describe("Product", () => {
  it("deve iniciar disponível", () => {
    const product = new FakeProduct();
    expect(product.isAvailable()).toBe(true);
  });

  it("sell() deve marcar o produto como indisponível", () => {
    const product = new FakeProduct();
    product.sell();
    expect(product.isAvailable()).toBe(false);
  });

  it("sell() deve lançar erro quando o produto já foi vendido", () => {
    const product = new FakeProduct();
    product.sell();
    expect(() => product.sell()).toThrow("Produto indisponível.");
  });

  it("deve armazenar e retornar preço e título", () => {
    const movie = new Movie();
    movie.setTitle("Interestelar");
    movie.setSalePrice(30);
    movie.setRentalPrice(10);

    expect(movie.getTitle()).toBe("Interestelar");
    expect(movie.getSalePrice()).toBe(30);
    expect(movie.getRentalPrice()).toBe(10);
  });

  it("register() deve preencher os dados a partir das respostas do usuário", () => {
    const answers = ["Matrix", "25", "8", "120"];
    const ask = jest.fn().mockImplementation(() => answers.shift());

    const movie = new Movie();
    movie.register(ask);

    expect(movie.getTitle()).toBe("Matrix");
    expect(movie.getSalePrice()).toBe(25);
    expect(movie.getRentalPrice()).toBe(8);
    expect(movie.getType()).toBe(ProductType.Movie);
    expect(movie.getDurationInMinutes()).toBe("120");
    expect(ask).toHaveBeenCalledTimes(4);
  });
});
