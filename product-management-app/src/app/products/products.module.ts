import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./products.component";
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatCheckboxModule} from "@angular/material";
import {ProductsRoutingModule} from "./products-routing.module";
import {ProductsService} from "../services/products.service";
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        MatTabsModule,
        MatGridListModule,
        MatListModule,
        MatCardModule,
        MatTabsModule,
        MatButtonModule,
        MatCheckboxModule,
        NgxSpinnerModule
    ],
    providers: [ProductsService]
})
export class ProductsModule { }