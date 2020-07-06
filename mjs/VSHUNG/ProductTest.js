"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTest = void 0;
class ProductTest {
    constructor(id, name, image, summary, price, canBuy = true) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.summary = summary;
        this.price = price;
        this.canBuy = canBuy;
    }
}
exports.ProductTest = ProductTest;
