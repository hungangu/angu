"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTest = void 0;
class ProductTest {
    //
    constructor(id, name, image, summary, price, canBuy = true) {
        this._id = id;
        this._canBuy = canBuy;
        this._price = price;
        this._image = image;
        this._summary = summary;
        this._name = name;
    }
    //
    get id() {
        return this._id;
    }
    set id(v) {
        this._id = v;
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    get image() {
        return this._image;
    }
    set image(v) {
        this._image = v;
    }
    get summary() {
        return this._summary;
    }
    set summary(v) {
        this._summary = v;
    }
    get price() {
        return this._price;
    }
    set price(v) {
        this._price = v;
    }
    get canBuy() {
        return this._canBuy;
    }
    set canBuy(v) {
        this._canBuy = v;
    }
}
exports.ProductTest = ProductTest;
