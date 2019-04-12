import {Injectable} from "@angular/core";
import {ProductModel} from "../products/product.model";
import {Observable} from "rxjs";

@Injectable()
export class ProductsService {
    products: ProductModel[] = [
        new ProductModel('1','Product 1',1543),
        new ProductModel('2','Product 2',2.1234),
        new ProductModel('3','Product 3',300),
        new ProductModel('4','Product 4',350.550),
        new ProductModel('5','Product 5',500)
    ];

    constructor(){}

    getProducts() {
        return this.products;
    }

    delete(id){
        const deleteProductObservable = new Observable(observer => {
            const {next, error} = observer;
            setTimeout(() => {
                if(id){
                    this.products = this.products.filter(function(value){
                        return value.id.toString() !== id.toString();
                    });
                    observer.next('success');
                    observer.complete();
                }else {
                    error('Product not deleted!');
                }
            }, 2000);
        });

        return deleteProductObservable;
    }
}