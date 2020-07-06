"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const CartItems_1 = require("./CartItems");
const Helpers_1 = require("../Helper/Helpers");
class Cart {
    constructor() {
        this.cartitems = [];
        this.totalQuantity = 0;
        this.totalPrice = 0;
    }
    addProduct(product, quantity = 0) {
        let position = this.getProductPosition(product);
        if (position > -1) {
            this.cartitems[position].quantity += quantity;
        }
        else {
            this.cartitems[this.cartitems.length] = new CartItems_1.CartItems(product, quantity);
        }
        this.totalQuantity += quantity;
        this.totalPrice += product.price * quantity;
    }
    updateProduct(product, quantity = 1) {
        let position = this.getProductPosition(product);
        if (position > -1) {
            this.totalQuantity = ((this.totalQuantity + quantity) - this.cartitems[position].quantity);
            this.totalPrice = this.totalPrice - product.price * (this.cartitems[position].quantity - quantity);
            this.cartitems[position].quantity = quantity; // update lai gia tri trong o input da thay doi
        }
    }
    deleteProduct(product) {
        let position = this.getProductPosition(product);
        if (position > -1) {
            this.totalQuantity = (this.totalQuantity - this.cartitems[position].quantity);
            this.totalPrice = this.totalPrice - product.price * (this.cartitems[position].quantity);
            this.cartitems.splice(position, 1);
        }
    }
    getProductPosition(product) {
        let total = this.cartitems.length;
        for (let i = 0; i < total; i++) {
            if (this.cartitems[i].product.id == product.id) {
                return i;
            }
        }
        return -1;
    }
    isEmpty() {
        return (this.cartitems.length == 0);
    }
    //
    //  showCartItemInHtml() nam ben CartItems.ts
    //
    showCartBodyInHtml() {
        let xhtmlResult = ``;
        if (!this.isEmpty()) {
            let totalItems = this.cartitems.length;
            for (let i = 0; i < totalItems; i++) {
                let itemInCart = this.cartitems[i];
                xhtmlResult += itemInCart.showCartItemInHtml(i + 1);
            }
        }
        return xhtmlResult;
    }
    //
    showCartFooterInHtml() {
        let xhtmlResult = `<tr><th colspan="6">Your cart is empty</th></tr>`;
        if (!this.isEmpty()) {
            xhtmlResult = `
        <tr>
        <td colspan="4">There are <b>${this.totalQuantity}</b> items in your cart</td>
        <td colspan="2" class="total-price text-left">${Helpers_1.Helpers.hienThiLoaiTien(this.totalPrice, "$")}</td>   
        </tr>
        `;
        }
        return xhtmlResult;
    }
}
exports.Cart = Cart;
