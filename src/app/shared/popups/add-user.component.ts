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

export interface AddUserModel {
  title?: string;
  users: UserData[];
  adminUsers: UserData[];
  groupUrl: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
})
export class AddUserComponent extends SimpleModalComponent<AddUserModel, boolean> implements AddUserModel, OnInit {
  title: string;
  users: UserData[];
  adminUsers: UserData[];
  checkedList: string[] = [];
  groupUrl: string;
  constructor(private readonly groupService: GroupService,
              private readonly router: Router,
              private readonly spinner: NgxSpinnerService) {
    super();
  }
  ngOnInit(): void {
    this.adminUsers.filter(admin => {
      this.users.filter(user => {
        if (admin.uuid === user.uuid) {
          this.checkedList.push(admin.uuid);
        }
      });
    });
    console.log(this.checkedList);
  }
  test(uuid: string): boolean {
    if (this.adminUsers.filter(user => user.uuid === uuid).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  onCheckboxChange(uuid, event) {
    if (event.target.checked && uuid) {
      this.checkedList.push(uuid);
    } else {
      for (let i = 0; i < this.checkedList.length; i++) {
        if (this.checkedList[i] === uuid) {
          this.checkedList.splice(i, 1);
        }
      }
    }
    console.log(this.checkedList);
  }

  update(): void {
    if ( this.checkedList.length <= 0){
      Swal.fire('Cancelled', 'Atlest one admin is required!!', 'error');
    }

    this.spinner.show();
    this.groupService.updateGroupAdmins(this.groupUrl, this.checkedList).
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
      console.log(data);
    });
  }
}
