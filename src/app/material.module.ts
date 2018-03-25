import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatIconModule ,MatInputModule, MatFormFieldModule ,MatDatepickerModule, MatNativeDateModule } from '@angular/material';//Importing Angular material
@NgModule({
    imports:[
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule
    ]
})
export class MaterialModule {}