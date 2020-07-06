export  class ProductTest {

    private _id:  number;
    private _image:  string;
    private _name:  string;
    private _summary:  string;
    private _price: number;
    private _canBuy: boolean;
    //
    constructor(id: number, name: string, image: string, summary: string,  price: number, canBuy: boolean=true) {
        this._id  =  id;
        this._canBuy = canBuy;
        this._price = price;
        this._image  =  image;
        this._summary  = summary;
        this._name  = name;
    }
    //
    public get id():   number{
        return this._id;
    }
    public set id(v){
        this._id  = v;
    }

    public get name(): string{
        return this._name;
    }
    public set name(v){
        this._name  = v;
    }

    public get image(): string{
        return this._image;
    }
    public set image(v){
        this._image  = v;
    }

    public get summary(): string{
        return this._summary;
    }
    public set summary(v){
        this._summary  = v;
    }

    public get price():   number{
        return this._price;
    }
    public set price(v){
        this._price  = v;
    }

    public get canBuy(): boolean{
        return this._canBuy;
    }
    public set canBuy(v){
        this._canBuy  = v;
    }
}