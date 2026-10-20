"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("./databases/Database"));
const MainController_1 = __importDefault(require("./controller/MainController"));
const database = new Database_1.default();
new MainController_1.default(database);
