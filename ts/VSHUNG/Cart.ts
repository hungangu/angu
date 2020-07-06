import {CartItems} from "./CartItems";
import {ProductTest} from "./ProductTest";
import {Helpers} from "../Helper/Helpers";

export class Cart {
    private cartitems: CartItems[] = [];
    public totalQuantity: number = 0;
    public totalPrice: number = 0;

    public addProduct (product: ProductTest, quantity: number=0): void{
        let position: number = this.getProductPosition(product);
        if(position > -1){
            this.cartitems[position].quantity += quantity;
        }else {
            this.cartitems[this.cartitems.length] = new CartItems(product, quantity);
        }
        this.totalQuantity += quantity;
        this.totalPrice += product.price*quantity;
    }

    public updateProduct (product: ProductTest, quantity: number = 1): void{
        let position: number = this.getProductPosition(product);
        if( position > -1 ){
            this.totalQuantity = ((this.totalQuantity + quantity) - this.cartitems[position].quantity);
            this.totalPrice = this.totalPrice - product.price*(this.cartitems[position].quantity - quantity);
            this.cartitems[position].quantity = quantity; // update lai gia tri trong o input da thay doi
        }
    }

    public deleteProduct (product: ProductTest): void{
        let position: number = this.getProductPosition(product);
        if( position > -1 ){
            this.totalQuantity = (this.totalQuantity  - this.cartitems[position].quantity);
            this.totalPrice = this.totalPrice - product.price*(this.cartitems[position].quantity);
            this.cartitems.splice(position, 1);
        }
    }

    public getProductPosition(product: ProductTest): number{
let total: number = this.cartitems.length;
for(let i: number = 0; i < total; i++){
    if(this.cartitems[i].product.id == product.id){
       return i;
    }
}
       return -1;
    }

    public isEmpty (): boolean{
        return (this.cartitems.length == 0);
    }

    //
  //  showCartItemInHtml() nam ben CartItems.ts
//
    public showCartBodyInHtml (): string{
        let xhtmlResult: string = ``;
        if(!this.isEmpty()){
            let totalItems = this.cartitems.length;
            for(let i: number = 0; i < totalItems; i++){
                let itemInCart: CartItems = this.cartitems[i];
                xhtmlResult += itemInCart.showCartItemInHtml(i+1);
            }
        }
             return xhtmlResult;
    }
//

    public showCartFooterInHtml (): string{
        let xhtmlResult: string = `<tr><th colspan="6">Your cart is empty</th></tr>`;
        if(!this.isEmpty()){
            xhtmlResult = `
        <tr>
        <td colspan="4">There are <b>${this.totalQuantity}</b> items in your cart</td>
        <td colspan="2" class="total-price text-left">${Helpers.hienThiLoaiTien(this.totalPrice, "$")}</td>   
        </tr>
        `;
        }
        return xhtmlResult;
    }

}