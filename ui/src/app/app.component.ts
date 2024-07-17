import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button'
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { UserModule } from './user/user.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MaterialModule,SharedModule,BooksModule,UserModule,CommonModule,AuthModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui';
}
