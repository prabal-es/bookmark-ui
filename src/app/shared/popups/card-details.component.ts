import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { CardData } from '../models/card';

export interface CardDetailsModel {
  title?: string;
  cardData: CardData;
}

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
})
export class CardDetailsComponent extends SimpleModalComponent<CardDetailsModel, null> implements CardDetailsModel {
  title: string;
  cardData: CardData;
  constructor() {
    super();
  }
}
