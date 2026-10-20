export interface IClient {
  getName(): string;
  getContact(): string;
}

export default class Client implements IClient {
    private name: string;
    private contact: string;

    constructor(name: string, contact: string = ""){
        this.name = name;
        this.contact = contact;
    }

    getName(): string {
        return this.name;
    }

    getContact(): string {
        return this.contact;
    }

    toString(): string;
    toString(full: boolean): string;
    toString(full?: boolean): string {
        if (full) {
            return `${this.name} - ${this.contact}`;
        }
        return this.name;
    }
}
