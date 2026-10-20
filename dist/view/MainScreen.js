"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductFactory_1 = __importDefault(require("../model/ProductFactory"));
const readline = __importStar(require("readline"));
class MainScreen {
    constructor(controller) {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        this.controller = controller;
        this.openFirstScreen();
    }
    ask(question) {
        return new Promise((resolve) => {
            this.rl.question(question, (answer) => {
                resolve(answer);
            });
        });
    }
    async openFirstScreen() {
        let option = 0;
        while (option != 3) {
            const input = await this.ask("DIGITE:\n1 para Cadastrar\n2.para Listar\n3.para Sair\n");
            option = Number(input);
            switch (option) {
                case 1:
                    try {
                        await this.registerScreen();
                    }
                    catch (error) {
                        console.log(error.message);
                    }
                    break;
                case 2:
                    this.controller.listProducts();
                    break;
                case 3:
                    break;
                default:
                    console.log("Entre com um número entre 1 e 3");
                    break;
            }
        }
        this.rl.close();
    }
    async registerScreen() {
        const type = await this.ask("Qual o tipo? (filme/jogo/serie)");
        const product = ProductFactory_1.default.create(type);
        await product.register(this.ask.bind(this));
        this.controller.database.products.push(product);
    }
}
exports.default = MainScreen;
