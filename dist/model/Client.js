"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(name, contact = "") {
        this.name = name;
        this.contact = contact;
    }
    getName() {
        return this.name;
    }
    getContact() {
        return this.contact;
    }
    toString(full) {
        if (full) {
            return `${this.name} - ${this.contact}`;
        }
        return this.name;
    }
}
exports.default = Client;
