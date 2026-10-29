import Description from "./Description";

export interface IClient {
  getName(): string;
  getContact(): string;
}

export default class Client extends Description implements IClient {
    private name: string;
    private contact: string;

    constructor(name: string, contact: string = ""){
        super();
        this.name = name;
        this.contact = contact;
    }

    getName(): string {
        return this.name;
    }

    getContact(): string {
        return this.contact;
    }

    static describe(): string {
        return "Client representa uma pessoa cadastrada na locadora.";
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
