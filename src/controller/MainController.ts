import Product from "../model/Product";
import ProductService from "../services/ProductService";
import Client from "../model/Client";
import ClientService from "../services/ClientService";
import DescriptionService from "../services/DescriptionService";
import { parseProductType } from "../model/ProductType";

export default class MainController{

  constructor(
    private productService: ProductService,
    private clientService: ClientService,
    private descriptionService: DescriptionService
  ){
  }

  public registerProduct(
    type: string,
    ask: (question: string) => string
  ): void {
    this.productService.registerProduct(parseProductType(type), ask);
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

  public listDescriptions(): string[] {
    return this.descriptionService.listDescriptions();
  }
}