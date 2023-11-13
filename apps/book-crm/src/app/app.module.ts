import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { authReducer } from './shared/state/auth.reducer';
import { DashboardModule } from './dashboard/dashboard.module';
import { booksReducer } from './shared/state/books.reducer';
import { markedBooksReducer } from './shared/state/marked-books.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    StoreModule.forRoot({
      auth: authReducer,
      books: booksReducer,
      markedBooks: markedBooksReducer
    }, {}),
    BrowserAnimationsModule,
    FormsModule,

    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
