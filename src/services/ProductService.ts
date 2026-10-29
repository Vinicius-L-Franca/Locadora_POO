import Database from "../databases/Database";
import Product from "../model/Product";
import ProductFactory from "../model/ProductFactory";
import ModelError from "../model/Errors";
import { ProductType } from "../model/ProductType";

export default class ProductService {
  constructor(private database: Database) {
  }

  registerProduct(
    type: ProductType,
    ask: (question: string) => string
  ): void {
    const product = ProductFactory.create(type);
    product.register(ask);
    this.database.addProduct(product);
  }

  listProducts(): Product[] {
    return this.database.getProducts();
  }

  purchaseProduct(index: number): void {
    const product = this.database.getProducts()[index];

    if (!product) {
      throw ModelError.productNotFound(index + 1);
    }

    product.sell();
  }
}