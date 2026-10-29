import Product from "./Product";
import { ProductType } from "./ProductType";

export default class Game extends Product{
    private platfmorm!: string
    setPlatform(platfmorm:string): void{
        this.platfmorm = platfmorm;
    }

    getPlatform(): string{
        return this.platfmorm
    }

    static describe(): string {
        return "Game representa jogos que podem ser vendidos ou alugados.";
    }

    register(ask: (question: string) => string): void {
        this.setTitle(ask("Digite o nome do jogo"));
        this.setSalePrice(Number(ask("Digite o preço de venda")));
        this.setRentalPrice(Number(ask("Digite o preço de aluguel")));
        this.setType(ProductType.Game);
        this.setPlatform(ask("Digite a plataforma"));
    }
}
