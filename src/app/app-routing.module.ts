import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './auth/log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth/guards/auth.guard';
import { ValidRoles } from './common/enums/valid-roles.enum';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';

const routes: Routes = [

  {
    path: '',
    component: LogInComponent,
  },
  {
    path: 'login',
    component: LogInComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[authGuard],
    data:{
      roles:[ValidRoles.employee,ValidRoles.sadmin]
    }
  },
  {
    path: 'employees',
    component: ManageEmployeesComponent,
    canActivate:[authGuard],
    data:{
      roles:[ValidRoles.adminEmployee,ValidRoles.adminManager,ValidRoles.sadmin]
    }
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
