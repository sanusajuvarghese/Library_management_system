import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "src/app/app.component";
import { MenuComponent } from "src/app/menu/menu/menu.component";
import { BookComponent } from "src/app/book/book.component";
import { CustomerComponent } from './customer/customer.component';
import { LoanComponent } from './loan/loan.component';

const routes: Routes = [
                        {path: '', component: MenuComponent},
                        {path: 'book-page', component: BookComponent},
                        {path: 'customer-page', component: CustomerComponent},
                        {path: 'loan-page', component: LoanComponent},
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
