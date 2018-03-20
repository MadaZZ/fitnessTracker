import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatIconModule ,MatInputModule, MatFormFieldModule} from '@angular/material';//Importing Angular material

@NgModule({
    imports:[
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule
    ]
})
export class MaterialModule {}