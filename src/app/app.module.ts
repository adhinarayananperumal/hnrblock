import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdComponent } from './prod/prod.component';
import { CategoryComponent } from './category/category.component';
import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { CustomerModule } from './customer/customer.module';
import { ChildTempletComponent } from './child-templet/child-templet.component';
import { ParentTempleteComponent } from './parent-templete/parent-templete.component';
import { NgonchangeExpChildComponent } from './ngonchange-exp-child/ngonchange-exp-child.component';
import { NgonchangeExpParentComponent } from './ngonchange-exp-parent/ngonchange-exp-parent.component';
import { NgonchangeExpFlightSearchComponent } from './ngonchange-exp-flight-search/ngonchange-exp-flight-search.component';
import { NgonchangeExpFlightDetailsComponent } from './ngonchange-exp-flight-details/ngonchange-exp-flight-details.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightTimingsComponent } from './flight-timings/flight-timings.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdComponent,
    CategoryComponent,
    AccountComponent,
    TransactionComponent,
    ChildTempletComponent,
    ParentTempleteComponent,
    NgonchangeExpChildComponent,
    NgonchangeExpParentComponent,
    NgonchangeExpFlightSearchComponent,
    NgonchangeExpFlightDetailsComponent,
    FlightSearchComponent,
    FlightTimingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule
  ],
  exports: [
    AccountComponent, // <--- Enable using the component in other modules
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
