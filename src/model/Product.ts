export default abstract class Product {
    private title!: string;
    private purchasePrice!: number;
    private rentalPrice!: number;
    private type!: string;
    
    getTitle():string{
        return this.title
    }

    setTitle(title:string):void{
        this.title = title
    }

    getPurchasePrice():number{
        return this.purchasePrice
    }

    setPurchasePrice(purchasePrice:number):void{
        this.purchasePrice = purchasePrice
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

    abstract register(ask: (question: string) => string): void;

}