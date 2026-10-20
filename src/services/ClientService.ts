import Database from "../databases/Database";
import Client from "../model/Client";

export default class ClientService {
  constructor(private database: Database) {
  }
  
  registerClient(name: string, contact: string): void {
    const client = new Client(name, contact);
    this.database.addClient(client);
  }

  listClients(): Client[] {
    return this.database.getClients();
  }
}