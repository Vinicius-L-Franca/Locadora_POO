import { ProductType } from "./ProductType";
import ModelError from "./Errors";

export default abstract class Product {
    private title!: string;
    private salePrice!: number;
    private rentalPrice!: number;
    private type!: ProductType;
    private available = true;
    
    getTitle():string{
        return this.title
    }

    setTitle(title:string):void{
        this.title = title
    }

    getSalePrice(): number {
        return this.salePrice;
    }

    setSalePrice(salePrice: number): void {
        this.salePrice = salePrice;
    }

    getRentalPrice():number{
        return this.rentalPrice
    }

    setRentalPrice(rentalPrice:number):void{
        this.rentalPrice = rentalPrice
    }

    getType():ProductType{
        return this.type
    }

    setType(type:ProductType):void{
        this.type = type
    }

    isAvailable(): boolean {
        return this.available;
    }

    sell(): void {
        if (!this.available) {
            throw ModelError.productUnavailable();
        }

        this.available = false;
    }

    abstract register(ask: (question: string) => string): void;

}