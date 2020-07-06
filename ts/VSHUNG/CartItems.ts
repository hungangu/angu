import {ProductTest} from "./ProductTest";
import {Helpers} from "../Helper/Helpers";

export class CartItems {
    private _product: ProductTest;
    private _quantity: number;

    constructor(product: ProductTest, quantity: number = 1) {
        this._product = product;
        this._quantity  = quantity;
    }


    // gan bien chay tt de lam thu tu
    public showCartItemInHtml(tt: number): string{
        return `
        <tr>        
        <th scope="row">${tt}</th>        
        <td>${this.product.name}</td>
        <td>${Helpers.hienThiLoaiTien(this.product.price, "$")}</td>
        <td><input name="quantity-${this.product.id}" type="number"  value="${this.quantity}" min="0"></td>
        <td><strong>${Helpers.hienThiLoaiTien(this.getSubTotal(), "$")}</strong></td>
        <td>
        <a class="updateProductCart label label-info" href="#" data-product="${this.product.id}">Update</a>
        <a class="deleteProductCart label label-danger" href="#"  data-product="${this.product.id}">Delete </a>
        </td>         
        </tr>
        `;
    }

    public getSubTotal(): number{
        return ((this.product.price)*(this.quantity));
    }

    // Do product va quantity la private nen dung 2 ham nay de truy cap product va quantity
  /*
    public getProduct(): ProductTest{
        return this._product;
    }
    public getQuantity(): number{
        return this._quantity;
    }
*/
    // Tao Getter va Setter
    // De khong phai dung 2 ham tren
    public set  product(v: ProductTest){
        this._product = v;
    }
    public get product(): ProductTest{
        return this._product;
    }


    public get quantity(): number{
        return this._quantity;
    }
    public set quantity(v: number){
        this._quantity = v;
    }

}