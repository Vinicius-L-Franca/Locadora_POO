import Product from "../model/Product";
import ProductService from "../services/ProductService";
import Client from "../model/Client";
import ClientService from "../services/ClientService";

export default class MainController{

  constructor(
    private productService: ProductService,
    private clientService: ClientService
  ){
  }

  public registerProduct(
    type: string,
    ask: (question: string) => string
  ): void {
    this.productService.registerProduct(type, ask);
  }

  public registerClient(
    name: string,
    contact: string
  ): void {
    this.clientService.registerClient(name, contact);
  }
  
  public listProducts(): Product[] {
    return this.productService.listProducts();
  }

  public purchaseProduct(index: number): void {
    this.productService.purchaseProduct(index);
  }

  public listClients(): Client[] {
    return this.clientService.listClients();
  }
}