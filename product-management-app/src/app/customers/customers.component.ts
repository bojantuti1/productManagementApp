import { Component, OnInit } from '@angular/core';
import { CustomerModel } from "./customer.model";
import { CustomersService } from "../services/customers.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: CustomerModel[] = [];

  constructor( private customerService: CustomersService, private router: Router ) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }

  newCustomer(){
    this.router.navigate(['customers/new']);
  }


}
