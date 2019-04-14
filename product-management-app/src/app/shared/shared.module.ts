import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { TableComponent } from "./table/table.component";
import {MatTabsModule} from "@angular/material";

@NgModule({
    declarations: [
        TableComponent
    ],
    exports: [
        CommonModule,
        TableComponent
    ],
    imports: [
        MatTabsModule
    ]
})


export class SharedModule {}