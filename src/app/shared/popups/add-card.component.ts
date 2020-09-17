import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { User, UserData } from '../models/user';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2';
import { GroupService } from '../services/group.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { map, catchError } from 'rxjs/operators';
import { GroupData } from '../models/group';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { CardData } from '../models/card';

export interface AddCardModel {
  title?: string;
  cards: CardData[];
  group: GroupData;
}

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
})
export class AddCardComponent extends SimpleModalComponent<AddCardModel, boolean> implements AddCardModel, OnInit {
  title?: string;
  cards: CardData[];
  group: GroupData;
  selecedCards: string[] = [];
  constructor(private readonly groupService: GroupService,
              private readonly router: Router,
              private readonly spinner: NgxSpinnerService) {
    super();
  }
  ngOnInit(): void {
    console.log(this.group.cards);
    console.log(this.cards);
    this.group.cards.filter(groupCard => {
      this.cards.filter(card => {
        if (groupCard.uuid === card.uuid) {
          this.selecedCards.push(card.uuid);
        }
      });
    });
  }
  test(uuid: string): boolean {
    if (this.group.cards.filter(card => card.uuid === uuid).length > 0) {
      return true;
    } else {
      return false;
    }
  }
  onCheckboxChange(uuid, event) {
    if (event.target.checked && uuid) {
      this.selecedCards.push(uuid);
    } else {
      for (let i = 0; i < this.selecedCards.length; i++) {
        if (this.selecedCards[i] === uuid) {
          this.selecedCards.splice(i, 1);
        }
      }
    }
    console.log(this.selecedCards);
  }

  update(): void {

    this.spinner.show();
    this.groupService.updateGroupCards(this.group.urlContext, this.selecedCards).
    pipe(
      map((data: GroupData) => {
        this.spinner.hide();
        return data;
      }), catchError(error => {
        this.spinner.hide();
        return throwError('Something went wrong!');
      })
    ).subscribe((data: GroupData) => {
      this.result = true;
      this.close();
    });
  }
}
