import Product from "../../src/model/Product";

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
    product.setTitle("Interestelar");
    product.sell();
    expect(() => product.sell()).toThrow(
      'Produto "Interestelar" indisponível.'
    );
  });

});
