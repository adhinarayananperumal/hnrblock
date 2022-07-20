import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { EmployeeService } from '../service/employee/employee.service';



@NgModule({
  declarations: [
    LandingPageComponent,
    EmployeeRegistrationComponent,
    EmployeeDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [LandingPageComponent]
})
export class EmployeeModule { }
