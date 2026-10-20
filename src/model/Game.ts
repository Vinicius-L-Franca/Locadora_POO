import Product from "./Product";

export default class Game extends Product{
    private platfmorm!: string
    setPlatform(platfmorm:string): void{
        this.platfmorm = platfmorm;
    }

    getPlatform(): string{
        return this.platfmorm
    }

    register(ask: (question: string) => string): void {
        this.setTitle(ask("Digite o nome do jogo"));
        this.setPurchasePrice(Number(ask("Digite o preço de compra")));
        this.setRentalPrice(Number(ask("Digite o preço de aluguel")));
        this.setType("jogo");
        this.setPlatform(ask("Digite a plataforma"));
    }
}
