import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyUsersComponent } from './company-users/company-users.component';
import { CompanyGroupsComponent } from './company-groups/company-groups.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { UserGroupsComponent } from './user-groups/user-groups.component';
import { UserCompanyGroupsComponent } from './user-company-groups/user-company-groups.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'cards', component: UserCardsComponent},
  {path: 'groups', component: UserGroupsComponent},
  {path: 'company-groups', component: UserCompanyGroupsComponent},
  {path: 'companies', component: CompanyComponent},
  {path: 'companies/:urlContext', component: CompanyDetailsComponent},
  {path: 'companies/:urlContext/users', component: CompanyUsersComponent},
  {path: 'companies/:urlContext/groups', component: CompanyGroupsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
