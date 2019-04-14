import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {CustomerModel} from "../customers/customer.model";
import { CustomersService } from "../services/customers.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  subscription: Subscription;
  customer: CustomerModel;
  isValidFormSubmitted = false;
  constructor(
      private router: Router,
      private customerService: CustomersService,
      private toastr: ToastrService,
      private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.customer = new CustomerModel('','','',[]);
  }

  addCustomer(form: NgForm) {
    this.spinner.show();
    this.isValidFormSubmitted = false;
    console.log('form.invalid', form.invalid);
    if (form.invalid) {
      this.spinner.hide();
      return;
    }
    this.isValidFormSubmitted = true;
    const value = form.value;

    const customer: CustomerModel = {
      id: new Date().getUTCMilliseconds().toString(),
      name: value.name_,
      email: value.email,
      products: []
    };

    this.subscription = this.customerService.createCustomer(customer).subscribe(
        (customerData: string) => {
            if(customerData === 'success'){
              this.toastr.success('New customer added!', 'Success');
              this.spinner.hide();
              form.resetForm();
              this.router.navigate(['customers']);
            }
          this.subscription.unsubscribe();
        }, (error) => {
          this.spinner.hide();
          this.toastr.error('Something went wrong!', 'Error');
          console.log('Received an errror: ' + error)
          this.subscription.unsubscribe();
        });

  }

}
