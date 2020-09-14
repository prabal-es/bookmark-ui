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

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CompanyDetailsComponent,
    CompanyUsersComponent,
    CompanyGroupsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
