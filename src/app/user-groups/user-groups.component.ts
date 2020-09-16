import { Component, OnInit } from '@angular/core';
import { UserData } from '../shared/models/user';
import { Group } from '../shared/models/group';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SimpleModalService } from 'ngx-simple-modal';
import { GroupService } from '../shared/services/group.service';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.css']
})
export class UserGroupsComponent implements OnInit {
  loginUser: UserData;
  groups: Group;
  constructor(private readonly loginService: LoginService,
              private readonly router: Router,
              private readonly spinner: NgxSpinnerService,
              private readonly groupService: GroupService,
              private readonly simpleModalService: SimpleModalService) { }

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

}
