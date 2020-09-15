import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { LoginComponent } from '../shared/popups/login.component';
import { User, UserData } from '../shared/models/user';
import { NgxSpinnerService } from 'ngx-spinner';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { CardService } from '../shared/services/card.service';
import { Card, CardData } from '../shared/models/card';
import Swal from 'sweetalert2';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User;
  tinyUrls: Card;
  loginUser: UserData;
  longUrl: string;
  expireAt: number;
  constructor(private readonly simpleModalService: SimpleModalService,
              private readonly userService: UserService,
              private readonly spinner: NgxSpinnerService,
              private readonly loginService: LoginService,
              private readonly router: Router,
              private readonly cardService: CardService) { }

  ngOnInit(): void {
    if (this.loginUser && this.loginUser.urlContext) {
      this.getCardsOfTypeTiny(this.loginUser.urlContext, this.loginUser.companyUrlContext);
    }
    this.loginService.currentUser.subscribe(loginUser => {
      this.loginUser = loginUser;
      if (loginUser.urlContext) {
        this.router.navigate(['/']);
        this.getCardsOfTypeTiny(loginUser.urlContext, loginUser.companyUrlContext);
      } else {
        this.getUsers();
      }
    });
  }

  getUsers(): void {
    this.spinner.show();
    this.userService.getUsers().
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
        this.simpleModalService.addModal(LoginComponent, { title: 'Login as:', users: this.users });
      });
  }

  getCardsOfTypeTiny(userUrlContext: string, companyUrlContext: string): void {
    this.spinner.show();
    this.cardService.getCardsOfTypeTiny(userUrlContext, companyUrlContext).
      pipe(
        map((data: Card) => {
          this.spinner.hide();
          return data;
        }), catchError(error => {
          this.spinner.hide();
          return throwError(error);
        })
      ).subscribe((data: Card) => {
        this.tinyUrls = data;
      });
  }

  generateTiny(): void {
    let expireAtTime = this.expireAt;
    if (!expireAtTime) {
      expireAtTime = environment.default_card_expire;
    } else {
      expireAtTime = expireAtTime * 60 * 1000;
    }
    try {
      const url = new URL(this.longUrl);
      if (!(url.protocol === 'http:' || url.protocol === 'https:') || this.longUrl.length > 2083) {
        throw new Error('Invalid protocol');
      }
    } catch (_) {
      Swal.fire('Cancelled', 'Invalid URL! currently we are supporting only "http/https" protocol with 2083 length.', 'error');
      return;
    }

    this.spinner.show();
    const reqData = new CardData();
    reqData.detailUrl = this.longUrl;
    reqData.expireAt = expireAtTime;
    reqData.type = 'TINY';

    this.cardService.createCard(
      this.loginUser.urlContext,
      this.loginUser.companyUrlContext, reqData).
      pipe(
        map((data: CardData) => {
          this.spinner.hide();
          return data;
        }), catchError(error => {
          this.spinner.hide();
          return throwError(error);
        })
      ).subscribe((data: CardData) => {
        this.tinyUrls.data.push(data);
      });
  }
}
