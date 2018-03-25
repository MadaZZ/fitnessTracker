import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatIconModule ,MatInputModule, MatFormFieldModule ,MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule } from '@angular/material';//Importing Angular material
@NgModule({
    imports:[
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSidenavModule,
        MatToolbarModule
    ]
})
export class MaterialModule {}