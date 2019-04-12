import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { NgxSpinnerModule } from 'ngx-spinner';

import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule
} from "@angular/material";
import {CustomersComponent} from "./customers.component";
import {NewCustomerComponent} from "../new-customer/new-customer.component";
import {CustomersRoutingModule} from "./customers-routing.module";
import {FormsModule} from "@angular/forms";
import {CustomersService} from "../services/customers.service";

@NgModule({
    declarations: [
        CustomersComponent,
        NewCustomerComponent
    ],
    imports: [
        CommonModule,
        CustomersRoutingModule,
        MatTabsModule,
        MatGridListModule,
        MatListModule,
        MatCardModule,
        MatTabsModule,
        MatButtonModule,
        MatCheckboxModule,
        FormsModule,
        NgxSpinnerModule
    ],
    providers: [CustomersService]
})
export class CustomersModule { }