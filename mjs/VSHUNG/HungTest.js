"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductRepositoryTest_1 = require("./ProductRepositoryTest");
const Helpers_1 = require("../Helper/Helpers");
const Cart_1 = require("./Cart");
var DinhNghiaCacBienHtml;
(function (DinhNghiaCacBienHtml) {
    DinhNghiaCacBienHtml.listProducts = "#list-product";
    DinhNghiaCacBienHtml.thongBaoGioHang = "#thongBaoGioHang";
    DinhNghiaCacBienHtml.cartBody = "#my-cart-body";
    DinhNghiaCacBienHtml.cartFooter = "#my_cart_footer";
})(DinhNghiaCacBienHtml || (DinhNghiaCacBienHtml = {}));
var DinhNghiaCacThongBaoHtml;
(function (DinhNghiaCacThongBaoHtml) {
    DinhNghiaCacThongBaoHtml.SanSangMuaHang = "Ready to buy products";
    DinhNghiaCacThongBaoHtml.PhaiChonItNhat01SanPham = "You should chose at least one items to continue buying";
})(DinhNghiaCacThongBaoHtml || (DinhNghiaCacThongBaoHtml = {}));
let repotest = new ProductRepositoryTest_1.ProductRepositoryTest();
let cartObj = new Cart_1.Cart();
let ProductArray = repotest.getAllItems();
function hienThiSanPham() {
    $(DinhNghiaCacBienHtml.listProducts).html(repotest.showItemInHtml());
}
function thongBao(noiDung) {
    $(DinhNghiaCacBienHtml.thongBaoGioHang).html(noiDung);
}
// Gio hang Html
function showCart() {
    $(DinhNghiaCacBienHtml.cartBody).html(cartObj.showCartBodyInHtml());
    $(DinhNghiaCacBienHtml.cartFooter).html(cartObj.showCartFooterInHtml());
}
// Dua vao gio hang
function addingProductToCart(id, quantity) {
    if (Helpers_1.Helpers.kiemTraSoLuong(quantity)) {
        let product = repotest.getItemById(id);
        cartObj.addProduct(product, quantity);
        showCart(); // sau khi thay doi phai goi lai;
    }
    else {
        thongBao(DinhNghiaCacThongBaoHtml.PhaiChonItNhat01SanPham);
    }
}
// Update gi hang
function updatingProductToCart(id, quantity) {
    if (Helpers_1.Helpers.kiemTraSoLuong(quantity)) {
        let product = repotest.getItemById(id);
        cartObj.updateProduct(product, quantity);
        showCart(); // sau khi thay doi phai goi lai;
    }
    else {
        thongBao(DinhNghiaCacThongBaoHtml.PhaiChonItNhat01SanPham);
    }
}
// Xoa phan tu trong gio hang
function deletingProductFromCart(id) {
    let product = repotest.getItemById(id);
    cartObj.deleteProduct(product);
    showCart();
}
$(document).ready(function () {
    hienThiSanPham();
    showCart(); // lan 01
    thongBao(DinhNghiaCacThongBaoHtml.SanSangMuaHang);
    // mua hang
    $("a.price").click(function () {
        let id = $(this).data("product");
        let quantity = parseInt($("input[name='quantity-product-" + id + "']").val());
        let nameProduct = $(this).data("hung");
        addingProductToCart(id, quantity);
    });
    // $(a.updateProductCart)
    $(document).on("click", "a.updateProductCart", function () {
        let id = $(this).data("product");
        let quantity = parseInt($("input[name='quantity-" + id + "']").val());
        updatingProductToCart(id, quantity);
    });
    // $(a.deleteProductCart)
    $(document).on("click", "a.deleteProductCart", function () {
        let id = $(this).data("product");
        deletingProductFromCart(id);
    });
});
