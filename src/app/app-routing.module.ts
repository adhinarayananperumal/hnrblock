import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeRegistrationComponent } from './employee/employee-registration/employee-registration.component';
import { LandingPageComponent } from './employee/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'employeeRegistration',
    component: EmployeeRegistrationComponent
  },
  {
    path: 'employeeDashboard',
    component: EmployeeDashboardComponent
  },
  {
    path: 'showEmployeeEditForm/:id',
    component: EmployeeEditComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
