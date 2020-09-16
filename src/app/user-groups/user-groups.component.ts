import { Component, OnInit } from '@angular/core';
import { UserData } from '../shared/models/user';
import { Group, GroupData } from '../shared/models/group';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SimpleModalService } from 'ngx-simple-modal';
import { GroupService } from '../shared/services/group.service';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.css']
})
export class UserGroupsComponent implements OnInit {
  loginUser: UserData;
  groups: Group;

  title: string;
  details: string;
  imgUrl: string;

  constructor(private readonly loginService: LoginService,
              private readonly router: Router,
              private readonly spinner: NgxSpinnerService,
              private readonly groupService: GroupService) { }

  ngOnInit(): void {
    this.loginService.currentUser.subscribe(loginUser => {
      this.loginUser = loginUser;
      if (loginUser.urlContext){
        this.getSelfGroups(loginUser.urlContext, loginUser.companyUrlContext);
      }else {
        this.router.navigate(['/']);
      }
    });
  }

  getSelfGroups(userUrlContext: string, companyUrlContext: string): void {
    this.spinner.show();
    this.groupService.getSelfGroups(userUrlContext, companyUrlContext).
      pipe(
        map((data: Group) => {
          this.spinner.hide();
          return data;
        }), catchError(error => {
          this.spinner.hide();
          return throwError(error);
        })
      ).subscribe((data: Group) => {
        this.groups = data;
      });
  }

  generateGroup(): void {

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
      const imgUrl = new URL(cardImgUrl);
      if (!(imgUrl.protocol === 'http:' || imgUrl.protocol === 'https:') || cardImgUrl.length > 2083){
        throw new Error('Invalid protocol/length');
      }
    } catch (_) {
      Swal.fire('Cancelled', 'Invalid URL[long url / image url]! currently we are supporting only "http/https" protocol with 2083 length.', 'error');
      return;
    }
    this.spinner.show();
    const reqData = new GroupData();
    reqData.name = cardTitle;
    reqData.description = cardDetails;
    reqData.img = cardImgUrl;

    this.groupService.createGroup(
      this.loginUser.urlContext,
      this.loginUser.companyUrlContext, reqData).
      pipe(
        map((data: GroupData) => {
          this.spinner.hide();
          return data;
        }), catchError(error => {
          this.spinner.hide();
          return throwError(error);
        })
      ).subscribe((data: GroupData) => {
        this.groups.data.push(data);
      });
  }

  showGroupDetails(group: GroupData): void{
    this.router.navigate(['/groups', group.urlContext]);
  }
}
