import { Component, OnInit } from '@angular/core';
import { UserData } from '../shared/models/user';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css']
})
export class UserCardsComponent implements OnInit {
  loginUser: UserData;
  constructor(private readonly loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.currentUser.subscribe(loginUser => {
      this.loginUser = loginUser;
      //this.getCardsOfTypeCard(loginUser.urlContext, loginUser.companyUrlContext);
    });
  }

}
