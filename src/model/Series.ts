import Product from "./Product";

export default class Serie extends Product{
    private episodes!: string
    setEpisodes(episodes:string): void{
        this.episodes = episodes;
    }

    getEpisodes(): string{
        return this.episodes;
    }

    register(ask: (question: string) => string): void {
        this.setTitle(ask("Digite o nome da serie"));
        this.setSalePrice(Number(ask("Digite o preço de venda")));
        this.setRentalPrice(Number(ask("Digite o preço de aluguel")));
        this.setType("serie");
        this.setEpisodes(ask("Digite a quantidade de episódios"));
    }
}
