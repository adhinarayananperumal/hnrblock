import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { EmployeeService } from '../service/employee/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { AppModule } from '../app.module';
import { AccountComponent } from '../account/account.component';
import { CustomerModule } from '../customer/customer.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LandingPageComponent,
    EmployeeRegistrationComponent,
    EmployeeDashboardComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppModule,
    CustomerModule,
    RouterModule
  ],
  providers: [EmployeeService],
  bootstrap: [LandingPageComponent]
})
export class EmployeeModule { }
