import Product from "./Product";
import { ProductType } from "./ProductType";

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
        this.setSalePrice(Number(ask("Digite o preço de venda")));
        this.setRentalPrice(Number(ask("Digite o preço de aluguel")));
        this.setType(ProductType.Movie);
        this.setDurationInMinutes(ask("Digite a duração em minutos"));
    }
}
