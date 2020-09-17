import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { CardData } from '../models/card';
import { environment } from 'src/environments/environment';

export interface CardDetailsModel {
  title?: string;
  cardData: CardData;
  userContextUrl: string;
}

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
})
export class CardDetailsComponent extends SimpleModalComponent<CardDetailsModel, null> implements CardDetailsModel, OnInit {
  title: string;
  cardData: CardData;
  userContextUrl: string;
  tinyUrlBasePath: string;
  constructor() {
    super();
  }
  ngOnInit(): void {
    this.tinyUrlBasePath = environment.bookmark_service_api_url + '/' + this.userContextUrl + '/';
  }
}
