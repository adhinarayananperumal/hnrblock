import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CusDashboardComponent } from './cus-dashboard/cus-dashboard.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeRegistrationComponent } from './employee/employee-registration/employee-registration.component';
import { LandingPageComponent } from './employee/landing-page/landing-page.component';
import { PrppertyBindingExpComponent } from './prpperty-binding-exp/prpperty-binding-exp.component';

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
  },
  {
    path: 'propertyBindingExample',
    component: PrppertyBindingExpComponent
  },
  {
    path: 'cusDashboard',
    component: CusDashboardComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
