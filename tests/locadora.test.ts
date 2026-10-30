import Database from "../src/databases/Database";
import Client from "../src/model/Client";
import Product from "../src/model/Product";
import ProductFactory from "../src/model/ProductFactory";
import Movie from "../src/model/Movie";
import { ProductType, parseProductType } from "../src/model/ProductType";
import DescriptionService from "../src/services/DescriptionService";
import ProductService from "../src/services/ProductService";

class FakeProduct extends Product {
  register(): void {}
}

describe("Locadora", () => {
  it("deve adicionar um cliente ao banco", () => {
    const database = new Database();
    database.addClient(new Client("Ana"));

    expect(database.getClients()).toHaveLength(1);
    expect(database.getClients()[0].getName()).toBe("Ana");
  });

  it("deve armazenar os dados do cliente", () => {
    const client = new Client("João", "joao@email.com");

    expect(client.getName()).toBe("João");
    expect(client.getContact()).toBe("joao@email.com");
  });

  it("deve marcar um produto como indisponível após a venda", () => {
    const product = new FakeProduct();

    product.sell();

    expect(product.isAvailable()).toBe(false);
  });

  it("deve criar um Movie para o tipo filme", () => {
    expect(ProductFactory.create(ProductType.Movie)).toBeInstanceOf(Movie);
  });

  it("deve converter uma string em tipo de produto", () => {
    expect(parseProductType("filme")).toBe(ProductType.Movie);
  });

  it("deve retornar uma descrição de classe", () => {
    const descriptions = new DescriptionService().listDescriptions();

    expect(descriptions).toContain(
      "Movie representa filmes que podem ser vendidos ou alugados."
    );
  });

  it("deve vender o produto escolhido", () => {
    const database = new Database();
    const service = new ProductService(database);
    const product = new Movie();
    product.setTitle("Gladiador");
    database.addProduct(product);

    service.purchaseProduct(0);

    expect(product.isAvailable()).toBe(false);
  });
});
