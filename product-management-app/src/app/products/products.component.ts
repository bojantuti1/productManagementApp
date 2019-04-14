import { Component, OnInit } from '@angular/core';
import { ProductModel } from "./product.model";
import { ProductsService } from "../services/products.service";
import {Subscription} from "rxjs";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: ProductModel[] = [];
  tableKeys: string[];
  subscription: Subscription;

  constructor(
      private productsService: ProductsService,
      private toastr: ToastrService,
      private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.tableKeys = ['id', 'name', 'price'];
  }

  deleteProduct(id){
    this.spinner.show();
    this.subscription = this.productsService.delete(id).subscribe(
        (productData: string) => {
          if(productData === 'success'){
            this.products = this.productsService.getProducts();
            this.toastr.success('Product deleted!', 'Success');
            this.spinner.hide();
          }
          this.subscription.unsubscribe();
        }, (error) => {
          this.spinner.hide();
          this.toastr.error('Something went wrong!', 'Error');
          console.log('Received an errror: ' + error)
          this.subscription.unsubscribe();
        });
  }

    trackByFn(index, item) {
        return item.id;
    }

}
