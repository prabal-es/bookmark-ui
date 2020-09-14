import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { LoginComponent } from '../shared/popups/login.component';
import { User, UserData } from '../shared/models/user';
import { CompanyService } from '../shared/services/company.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User;
  loginUser: UserData;
  constructor(private readonly simpleModalService: SimpleModalService,
              private readonly companyService: CompanyService,
              private readonly spinner: NgxSpinnerService,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.currentUser.subscribe(loginUser => this.loginUser = loginUser);
    this.getUsers();
  }

  getUsers(): void {
    this.spinner.show();
    this.companyService.getCompaniesUsers('soc-gen').
    pipe(
      map((data: User) => {
        this.spinner.hide();
        return data;
      }), catchError(error => {
        this.spinner.hide();
        return throwError('Something went wrong!');
      })
    ).subscribe((data: User) => {
      this.users = data;
      this.simpleModalService.addModal(LoginComponent, {title: 'Login as:', users: this.users});
    });
  }
}
