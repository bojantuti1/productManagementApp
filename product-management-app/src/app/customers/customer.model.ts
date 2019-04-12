import {ProductModel} from "../products/product.model";

export class CustomerModel {


  constructor(public id: string, public name: string, public email: string, public products: ProductModel[] = []){

  }
}
