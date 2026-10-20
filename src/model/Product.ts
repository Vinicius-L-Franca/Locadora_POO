export default abstract class Product {
    private title!: string;
    private salePrice!: number;
    private rentalPrice!: number;
    private type!: string;
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

    getType():string{
        return this.type
    }

    setType(type:string):void{
        this.type = type
    }

    isAvailable(): boolean {
        return this.available;
    }

    sell(): void {
        if (!this.available) {
            throw new Error("Produto indisponível.");
        }

        this.available = false;
    }

    abstract register(ask: (question: string) => string): void;

}