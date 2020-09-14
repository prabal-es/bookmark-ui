import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyUsersComponent } from './company-users/company-users.component';
import { CompanyGroupsComponent } from './company-groups/company-groups.component';
import { CompanyComponent } from './company/company.component';


const routes: Routes = [
  {path: 'companies', component: CompanyComponent},
  {path: 'companies/:urlContext', component: CompanyDetailsComponent},
  {path: 'companies/:urlContext/users', component: CompanyUsersComponent},
  {path: 'companies/:urlContext/groups', component: CompanyGroupsComponent},
  {path: '**', redirectTo: 'companies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
