import Database from "./Database";
import Client from "../model/Client";

describe("Database", () => {
  it("deve adicionar e listar clientes", () => {
    const db = new Database();
    db.addClient(new Client("Ana"));
    db.addClient(new Client("Bruno"));

    expect(db.getClients()).toHaveLength(2);
    expect(db.getClients()[0].getName()).toBe("Ana");
  });

  it("getProducts() deve retornar uma cópia, não o array interno", () => {
    const db = new Database();
    const products = db.getProducts();
    products.push(null as never);

    expect(db.getProducts()).toHaveLength(0);
  });
});
