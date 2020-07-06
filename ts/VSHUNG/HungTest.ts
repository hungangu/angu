
import {ProductRepositoryTest} from "./ProductRepositoryTest";
import {ProductTest} from "./ProductTest";
import {Helpers} from "../Helper/Helpers";
import {Cart} from "./Cart";

namespace DinhNghiaCacBienHtml {
    export const listProducts: string = "#list-product";
    export const thongBaoGioHang: string = "#thongBaoGioHang";
    export const cartBody: string = "#my-cart-body";
    export const cartFooter: string = "#my_cart_footer";
}

namespace DinhNghiaCacThongBaoHtml {
    export const SanSangMuaHang: string = "Ready to buy products";
    export const PhaiChonItNhat01SanPham: string = "You should chose at least one items to continue buying";

}

let  repotest  =  new ProductRepositoryTest();

let cartObj = new Cart();

let ProductArray: ProductTest[] = repotest.getAllItems();



function hienThiSanPham(): void {
    $(DinhNghiaCacBienHtml.listProducts).html(repotest.showItemInHtml());
}

function thongBao(noiDung: string): void {
    $(DinhNghiaCacBienHtml.thongBaoGioHang).html(noiDung);
}

// Gio hang Html
function showCart(): void{
    $(DinhNghiaCacBienHtml.cartBody).html(cartObj.showCartBodyInHtml());
    $(DinhNghiaCacBienHtml.cartFooter).html(cartObj.showCartFooterInHtml());
}

// Dua vao gio hang
function addingProductToCart(id: number, quantity: number){
    if(Helpers.kiemTraSoLuong(quantity)){
        let product: ProductTest = repotest.getItemById(id);
        cartObj.addProduct(product, quantity);
        showCart(); // sau khi thay doi phai goi lai;
    }else {
        thongBao(DinhNghiaCacThongBaoHtml.PhaiChonItNhat01SanPham);}
}

// Update gi hang
function updatingProductToCart(id: number, quantity: number){
    if(Helpers.kiemTraSoLuong(quantity)){
        let product: ProductTest = repotest.getItemById(id);
        cartObj.updateProduct(product, quantity);
        showCart(); // sau khi thay doi phai goi lai;
    }else {
        thongBao(DinhNghiaCacThongBaoHtml.PhaiChonItNhat01SanPham);}
}

// Xoa phan tu trong gio hang
function deletingProductFromCart(id: number){
    let product: ProductTest = repotest.getItemById(id);
    cartObj.deleteProduct(product);
    showCart();
}

$(document).ready(function() {
    hienThiSanPham();
    showCart(); // lan 01
    thongBao(DinhNghiaCacThongBaoHtml.SanSangMuaHang);

    // mua hang
    $("a.price").click(function () {
        let id: number = $(this).data("product");
        let quantity: number = parseInt($("input[name='quantity-product-" + id + "']").val());
        let nameProduct: string = $(this).data("hung");
        addingProductToCart(id, quantity);
    });
    // $(a.updateProductCart)
    $(document).on("click", "a.updateProductCart", function () {
        let id: number = $(this).data("product");
        let quantity: number = parseInt($("input[name='quantity-" + id + "']").val());
        updatingProductToCart(id, quantity);
    });

    // $(a.deleteProductCart)
    $(document).on("click", "a.deleteProductCart", function () {
        let id: number = $(this).data("product");
        deletingProductFromCart(id);
    });


});
