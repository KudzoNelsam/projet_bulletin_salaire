import {Routes} from '@angular/router';
import {SecurityComponent} from './pages/secure/security.component';
import {ConnexionPageComponent} from './pages/secure/connexion-page/connexion-page.component';
import {AdminComponent} from './pages/admin/admin.component';
import {AuthGuardService} from './shared/services/impl/auth-guard.service';
import {EmployeesComponent} from './pages/admin/employees/employees.component';
import {EmployeDetailComponent} from './pages/admin/employe-detail/employe-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: SecurityComponent,
    children: [
      {
        path: '',
        component: ConnexionPageComponent
      },
      {
        path: 'login',
        redirectTo: '',
        pathMatch: 'full'
      },

    ],

  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'employees',
        component: EmployeesComponent
      },
      {
        path: 'detail/:id',
        component: EmployeDetailComponent
      }

    ]
  }
  ,

];
