import MainController from "../controller/MainController";
import promptSync = require("prompt-sync");

export default class MainScreen {
  private prompt = promptSync();

  private ask(question: string): string {
    return this.prompt(question);
  }
  
  private controller: MainController;

  constructor(controller: MainController) {
    this.controller = controller;
    this.openFirstScreen();
  }

  private openFirstScreen(): void {
    let option = 0;
    while (option !== 3) {
      const input = this.ask(
        "DIGITE:\n1 para Cadastrar um produto\n2 para Listar os produtos\n3 para Sair\n4 para listar os clientes cadastrados\n5 para cadastrar um cliente\n"
      );
      option = Number(input);
      switch (option) {
        case 1:
          this.registerScreen();
          break;
        case 2:
          this.listProducts();
          break;
        case 3:
          break;
        case 4:
          this.listClients();
          break;
        case 5:
          this.registerClientScreen();
          break;
        default:
          console.log("Entre com um número entre 1 e 5");
      }
    }
  }

  private registerScreen(): void {
    try {
      const type = this.ask("Qual o tipo? (filme/jogo/serie)\n");
      this.controller.registerProduct(type, this.ask.bind(this));
      console.log("Produto cadastrado com sucesso.");
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  private registerClientScreen(): void {
    try {
      const name = this.ask("Qual o nome do cliente?\n");
      const contact = this.ask("Qual o contato do cliente?\n");
      this.controller.registerClient(name, contact);
      console.log("Cliente cadastrado com sucesso.");
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  private listProducts(): void {
    const products = this.controller.listProducts();

    if (products.length === 0) {
      console.log("Nenhum produto cadastrado.");
      return;
    }

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      console.log(
        `${i + 1}. ${product.getTitle()} | ${product.getType()} | Compra: R$${product.getPurchasePrice()} | Aluguel: R$${product.getRentalPrice()}`
      );
    }
  }

  private listClients(): void {
    const clients = this.controller.listClients();

    if (clients.length === 0) {
      console.log("Nenhum cliente cadastrado.");
      return;
    }

    for (let i = 0; i < clients.length; i++) {
      const client = clients[i];
      console.log(
        `${i + 1}. ${client.getName()} | contato: ${client.getContact()}`
      );
    }
  }
}
