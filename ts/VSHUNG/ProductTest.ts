export  class ProductTest {

    public id: number;
    public name: string;
    public image: string;
    public summary: string;
    public price: number;
    public canBuy: boolean;

    constructor(id: number, name: string, image: string, summary: string,  price: number, canBuy: boolean=true) {
        this.id  =  id;
        this.name  = name;
        this.image  =  image;
        this.summary  = summary;
        this.price = price;
        this.canBuy = canBuy;
    }

   }