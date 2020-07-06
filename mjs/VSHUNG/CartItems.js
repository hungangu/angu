"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItems = void 0;
const Helpers_1 = require("../Helper/Helpers");
class CartItems {
    constructor(product, quantity = 1) {
        this._product = product;
        this._quantity = quantity;
    }
    // gan bien chay tt de lam thu tu
    showCartItemInHtml(tt) {
        return `
        <tr>        
        <th scope="row">${tt}</th>        
        <td>${this.product.name}</td>
        <td>${Helpers_1.Helpers.hienThiLoaiTien(this.product.price, "$")}</td>
        <td><input name="quantity-${this.product.id}" type="number"  value="${this.quantity}" min="0"></td>
        <td><strong>${Helpers_1.Helpers.hienThiLoaiTien(this.getSubTotal(), "$")}</strong></td>
        <td>
        <a class="updateProductCart label label-info" href="#" data-product="${this.product.id}">Update</a>
        <a class="deleteProductCart label label-danger" href="#"  data-product="${this.product.id}">Delete </a>
        </td>         
        </tr>
        `;
    }
    getSubTotal() {
        return ((this.product.price) * (this.quantity));
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
    set product(v) {
        this._product = v;
    }
    get product() {
        return this._product;
    }
    get quantity() {
        return this._quantity;
    }
    set quantity(v) {
        this._quantity = v;
    }
}
exports.CartItems = CartItems;
