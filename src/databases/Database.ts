import Product from "../model/Product"
import Client from "../model/Client"

export default class Database{
    private products: Product[] = [];
    private clients: Client[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    getProducts(): Product[] {
        return [...this.products];
    }

    addClient(client: Client): void {
        this.clients.push(client);
    }

    getClients(): Client[] {
        return [...this.clients];
    }
}
