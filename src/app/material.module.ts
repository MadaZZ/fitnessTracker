// This module imports all the required angular-material modules and exports them to app.module to reduce the data on it.
import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { 
    MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatListModule, 
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule
} from '@angular/material';//Importing Angular material modules
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
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSnackBarModule
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
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSnackBarModule
    ]
})
export class MaterialModule {}