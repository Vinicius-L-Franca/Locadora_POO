import Product from "./Product";
import { ProductType } from "./ProductType";

export default class Serie extends Product{
    private episodes!: string
    setEpisodes(episodes:string): void{
        this.episodes = episodes;
    }

    getEpisodes(): string{
        return this.episodes;
    }

    static describe(): string {
        return "Serie representa séries que podem ser vendidas ou alugadas.";
    }

    register(ask: (question: string) => string): void {
        this.setTitle(ask("Digite o nome da serie"));
        this.setSalePrice(Number(ask("Digite o preço de venda")));
        this.setRentalPrice(Number(ask("Digite o preço de aluguel")));
        this.setType(ProductType.Serie);
        this.setEpisodes(ask("Digite a quantidade de episódios"));
    }
}
