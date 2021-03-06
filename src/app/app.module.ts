import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './shared/services/company.service';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyUsersComponent } from './company-users/company-users.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CompanyGroupsComponent } from './company-groups/company-groups.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { SimpleModalModule } from 'ngx-simple-modal';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './shared/popups/login.component';
import { LoginService } from './shared/services/login.service';
import { UserService } from './shared/services/user.service';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { UserGroupsComponent } from './user-groups/user-groups.component';
import { UserCompanyGroupsComponent } from './user-company-groups/user-company-groups.component';
import { CardService } from './shared/services/card.service';
import { CardDetailsComponent } from './shared/popups/card-details.component';
import { GroupService } from './shared/services/group.service';
import { UsersGroupDetailsComponent } from './users-group-details/users-group-details.component';
import { AddUserComponent } from './shared/popups/add-user.component';
import { AddCardComponent } from './shared/popups/add-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CompanyDetailsComponent,
    CompanyUsersComponent,
    CompanyGroupsComponent,
    HomeComponent,
    LoginComponent,
    AddUserComponent,
    AddCardComponent,
    CardDetailsComponent,
    UserCardsComponent,
    UserGroupsComponent,
    UserCompanyGroupsComponent,
    UsersGroupDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    SimpleModalModule.forRoot({container: 'modal-container'})
  ],
  providers: [CompanyService, LoginService, UserService, CardService, GroupService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
