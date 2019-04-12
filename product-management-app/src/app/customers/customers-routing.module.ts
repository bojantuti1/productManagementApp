import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CustomersComponent} from "./customers.component";
import {NewCustomerComponent} from "../new-customer/new-customer.component";

const customersRoutes: Routes = [
    { path: '', component: CustomersComponent},
    { path: 'new', component: NewCustomerComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(customersRoutes)
    ],
    exports: [RouterModule]
})

export class CustomersRoutingModule { }