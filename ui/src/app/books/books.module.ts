//import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookStoreComponent } from './book-store/book-store.component';
//import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { MaintenaceComponent } from './maintenace/maintenace.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { EditbookComponent } from './editbook/editbook.component';



@NgModule({
  declarations: [
    BookStoreComponent,
    MaintenaceComponent,
    ReturnBookComponent,
    EditbookComponent
  ],
  imports: [
    CommonModule,
   
    SharedModule
  ]
})
export class BooksModule { }
