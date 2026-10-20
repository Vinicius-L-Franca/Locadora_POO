import Database from "../databases/Database";
import Product from "../model/Product";
import ProductFactory from "../model/ProductFactory";

export default class ProductService {
  constructor(private database: Database) {
  }

  registerProduct(
    type: string,
    ask: (question: string) => string
  ): void {
    const product = ProductFactory.create(type);
    product.register(ask);
    this.database.addProduct(product);
  }

  listProducts(): Product[] {
    return this.database.getProducts();
  }
}