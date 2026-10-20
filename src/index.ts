import Database from "./databases/Database";
import { seedDatabase } from "./databases/seed";
import MainController from "./controller/MainController";
import ClientService from "./services/ClientService";
import ProductService from "./services/ProductService";
import MainScreen from "./view/MainScreen";

const database = new Database();
seedDatabase(database);
const productService = new ProductService(database);
const clientService = new ClientService(database);
const controller = new MainController(productService, clientService);
new MainScreen(controller);
