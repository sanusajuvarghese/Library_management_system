import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu/menu.component';
import { BookComponent } from './book/book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatInputModule,MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CustomerComponent } from './customer/customer.component';
import { LoanComponent } from './loan/loan.component';
import { BackToMenuComponent } from './menu/back-to-menu/back-to-menu.component';
import { MailModalComponent } from './modal/mail-modal/mail-modal.component';
import { MessageModalComponent } from './modal/message-modal/message-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BookComponent,
    CustomerComponent,
    LoanComponent,
    BackToMenuComponent,
    MailModalComponent,
    MessageModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   /* for using form elements like NgForm */
    HttpClientModule, /* for using http request elements end verbs like GET, POST, ... */
    MatDatepickerModule, MatInputModule,MatNativeDateModule, BrowserAnimationsModule, ReactiveFormsModule, /* for using input date picker -> need to install @angular/material package*/
    NgxSpinnerModule /* for using spinner */
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
