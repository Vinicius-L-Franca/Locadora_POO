import Product from "./Product";

export default class Movie extends Product{
    private durationInMinutes!: string
    setDurationInMinutes(durationInMinutes:string): void{
        this.durationInMinutes = durationInMinutes;
    }

    getDurationInMinutes():string {
        return this.durationInMinutes
    }

    register(ask: (question: string) => string): void {
        this.setTitle(ask("Digite o nome do filme"));
        this.setPurchasePrice(Number(ask("Digite o preço de compra")));
        this.setRentalPrice(Number(ask("Digite o preço de aluguel")));
        this.setType("filme");
        this.setDurationInMinutes(ask("Digite a duração em minutos"));
    }
}
