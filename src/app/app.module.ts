import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CompanyDetailsComponent,
    CompanyUsersComponent,
    CompanyGroupsComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    CommonModule,
    SimpleModalModule.forRoot({container: 'modal-container'})
  ],
  providers: [CompanyService, LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
