import { Component, OnInit } from '@angular/core';
import { UserData } from '../shared/models/user';
import { LoginService } from '../shared/services/login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CardService } from '../shared/services/card.service';
import { map, catchError } from 'rxjs/operators';
import { Card, CardData } from '../shared/models/card';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2';
import { CardDetailsComponent } from '../shared/popups/card-details.component';
import { SimpleModalService } from 'ngx-simple-modal';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css']
})
export class UserCardsComponent implements OnInit {
  loginUser: UserData;
  cards: Card;

  longUrl: string;
  title: string;
  details: string;
  imgUrl: string;
  expireAt: number;

  constructor(private readonly loginService: LoginService,
              private readonly router: Router,
              private readonly spinner: NgxSpinnerService,
              private readonly cardService: CardService,
              private readonly simpleModalService: SimpleModalService) { }

  ngOnInit(): void {
    this.loginService.currentUser.subscribe(loginUser => {
      this.loginUser = loginUser;
      if (loginUser.urlContext){
        this.getCardsOfTypeCard(loginUser.urlContext, loginUser.companyUrlContext);
      }else {
        this.router.navigate(['/']);
      }
    });
  }

  getCardsOfTypeCard(userUrlContext: string, companyUrlContext: string): void {
    this.spinner.show();
    this.cardService.getCardsOfTypeCard(userUrlContext, companyUrlContext).
      pipe(
        map((data: Card) => {
          this.spinner.hide();
          return data;
        }), catchError(error => {
          this.spinner.hide();
          return throwError(error);
        })
      ).subscribe((data: Card) => {
        this.cards = data;
      });
  }

  generateCard(): void {
    let expireAtTime = this.expireAt;
    if (!expireAtTime) {
      expireAtTime = environment.default_card_expire;
    } else {
      expireAtTime = expireAtTime * 60 * 1000;
    }
    let cardImgUrl = this.imgUrl;
    if (!cardImgUrl){
      cardImgUrl = environment.default_card_url;
    }
    let cardTitle = this.title;
    if (!cardTitle || !cardTitle.trim()){
      cardTitle = this.loginUser.name;
    }
    let cardDetails = this.details;
    if (!cardDetails || !cardDetails.trim()){
      cardDetails = 'User is Lazy!!!';
    }
    try {
      const url = new URL(this.longUrl);
      const imgUrl = new URL(cardImgUrl);
      if (!(url.protocol === 'http:' || url.protocol === 'https:') || this.longUrl.length > 2083) {
        throw new Error('Invalid protocol/length');
      } else if (!(imgUrl.protocol === 'http:' || imgUrl.protocol === 'https:') || cardImgUrl.length > 2083){
        throw new Error('Invalid protocol/length');
      }
    } catch (_) {
      Swal.fire('Cancelled', 'Invalid URL[long url / image url]! currently we are supporting only "http/https" protocol with 2083 length.', 'error');
      return;
    }
    this.spinner.show();
    const reqData = new CardData();
    reqData.name = cardTitle;
    reqData.description = cardDetails;
    reqData.detailUrl = this.longUrl;
    reqData.img = cardImgUrl;
    reqData.expireAt = expireAtTime;
    reqData.type = 'CARD';

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
        this.cards.data.push(data);
      });

  }

  showDetails(selectedCardData: CardData): void {
    this.simpleModalService.addModal(CardDetailsComponent, { title: selectedCardData.name, cardData: selectedCardData });
  }

  todoInfo(): void{
    Swal.fire('Information', 'This feature is planned in near future.', 'info');
  }
}
