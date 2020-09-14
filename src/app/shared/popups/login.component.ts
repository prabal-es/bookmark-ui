import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { User, UserData } from '../models/user';
import { LoginService } from '../services/login.service';

export interface LoginModel {
  title?: string;
  users: User;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends SimpleModalComponent<LoginModel, null> implements LoginModel {
  title: string;
  users: User;
  loginUser: UserData;
  message: string;
  constructor(private loginService: LoginService) {
    super();
  }
  onLogin(user: UserData){
    this.loginService.changeLoginUser(user);
    this.close();
  }
}
