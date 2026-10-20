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
        this.setPurchasePrice(Number(ask("Digite o preço de compra")));
        this.setRentalPrice(Number(ask("Digite o preço de aluguel")));
        this.setType("serie");
        this.setEpisodes(ask("Digite a quantidade de episódios"));
    }
}
