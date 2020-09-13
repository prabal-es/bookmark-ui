import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyUsersComponent } from './company-users/company-users.component';


const routes: Routes = [
  {path: 'companies', component: HomeComponent},
  {path: 'companies/:uuid', component: CompanyDetailsComponent},
  {path: 'companies/:uuid/users', component: CompanyUsersComponent},
  {path: '**', redirectTo: 'companies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
