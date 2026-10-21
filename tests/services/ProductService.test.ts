import Database from "../../src/databases/Database";
import ProductService from "../../src/services/ProductService";
import Movie from "../../src/model/Movie";
import { ProductType } from "../../src/model/ProductType";

describe("ProductService", () => {
  let database: Database;
  let service: ProductService;

  beforeEach(() => {
    database = new Database();
    service = new ProductService(database);
  });

  it("registerProduct() deve criar e adicionar o produto no banco", () => {
    const ask = jest
      .fn()
      .mockReturnValueOnce("Titanic")
      .mockReturnValueOnce("40")
      .mockReturnValueOnce("15")
      .mockReturnValueOnce("195");

    service.registerProduct(ProductType.Movie, ask);

    const products = service.listProducts();
    expect(products).toHaveLength(1);
    expect(products[0]).toBeInstanceOf(Movie);
    expect(products[0].getTitle()).toBe("Titanic");
  });

  it("registerProduct() deve lançar erro para tipo inválido", () => {
    expect(() =>
      service.registerProduct("livro" as ProductType, () => "")
    ).toThrow("Tipo inválido");
  });

  it("purchaseProduct() deve marcar o produto como vendido", () => {
    const product = new Movie();
    product.setTitle("Gladiador");
    database.addProduct(product);

    service.purchaseProduct(0);

    expect(product.isAvailable()).toBe(false);
  });

  it("purchaseProduct() deve lançar erro para índice inexistente", () => {
    expect(() => service.purchaseProduct(5)).toThrow("Produto não encontrado.");
  });
});
