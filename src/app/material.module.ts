import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';//Importing Angular material

@NgModule({
    imports:[
        MatButtonModule,
        MatCheckboxModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule
    ]
})
export class MaterialModule {}