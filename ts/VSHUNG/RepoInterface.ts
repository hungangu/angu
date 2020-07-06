import {ProductTest} from "./ProductTest";

    export interface IRepoInterface {

     ProductsArrays:  ProductTest[];
        vsh: ProductTest;
        itemShow: ProductTest;

    addItem(product: ProductTest)

    getAllItems(): ProductTest[]

        getItemById(id: number): ProductTest

        showItemInHtml()
}