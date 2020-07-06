
import {ProductTest} from "./ProductTest";
import {IRepoInterface} from "./RepoInterface";
import {Helpers} from "../Helper/Helpers";

export class ProductRepositoryTest implements IRepoInterface{

 ProductsArrays:  ProductTest[]  =  [];
 vsh: ProductTest;
 itemShow: ProductTest; // = {canBuy: false, id: 0, image: "", name: "", price: 0, summary: ""}
 k: number;


 constructor() {
     const product01 =  new ProductTest(100, "bulbasaur", "bulbasaur.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 69, true)
     this.addItem(product01);
     const product02 =  new ProductTest(101, "charmander", "charmander.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 18, true)
     this.addItem(product02);
     this.addItem(new ProductTest(102, "ivysaur", "ivysaur.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 22))
     this.addItem( new ProductTest(103, "squirtle", "squirtle.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 65));
     this.addItem( new ProductTest(104, "venusaur", "venusaur.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 14, false));

 }

    public addItem(product: ProductTest){
     // this.ProductsArrays.push(product);
        this.ProductsArrays[this.ProductsArrays.length] = product;
    }

 public getAllItems():  ProductTest[]{
    return this.ProductsArrays;
}

  public getItemById(id: number): ProductTest {
//  C1
      // for(let k = 0; k <=  this.ProductsArrays.length; k++) {
      //    if(this.ProductsArrays[k].id == id)
      //         return this.ProductsArrays[k];
      //   }
      //  return null;
// C2
// let abc = this.ProductsArrays.filter(x => x.id == id);
//    console.log(abc[0]);
//   return abc[0];
// C3
// let  ggg: ProductTest  = this.ProductsArrays.find(x=>x.id==id);
// console.log(ggg);
// return ggg;
// C4
      this.ProductsArrays.forEach(x => {
          if(x.id == id){
              this.vsh = x;
          }
          else return null;
      })
      return this.vsh;
  }


  public showItemInHtml(): string {

     let xhtmlResult: string = ``;
     let totalSp: number = this.ProductsArrays.length;

     if(totalSp > 0 )
     {
         for(this.k = 0; this.k < totalSp; this.k++) {
             this.itemShow = this.ProductsArrays[this.k];
             xhtmlResult += `<div  class="media product">

<div class="media-left">
<a href="#">
<img  class="media-object"  src="img/characters/${this.itemShow.image}" alt="${this.itemShow.name}">
</a>
</div>

<div class="media-body">
    <h4  class="media-heading">${this.itemShow.name}</h4>
    <p>${this.itemShow.summary}</p>
    ${this.showBuyItemInHtml(this.itemShow)};
</div>
</div>`;
         }
     } else {
         xhtmlResult  = "Khong Tim Thay San Pham Nao";
     }
     return  xhtmlResult;
}

public showBuyItemInHtml(product: ProductTest): string{
     let BHtmlResult: string = "";
if(product.canBuy == true){
    BHtmlResult = `<input name="quantity-product-${product.id}" type="number" value="0" min="0">
                   <a class="price" 
                      href="#" 
                      data-product="${product.id}"   
                      data-hung = "${product.name}";                  
                      >${Helpers.hienThiLoaiTien(product.price, "$")}</a> `;
}else {
     BHtmlResult = `<span class="price">${Helpers.hienThiLoaiTien(product.price, "$")}</span>`;
}
    return BHtmlResult;
}

}