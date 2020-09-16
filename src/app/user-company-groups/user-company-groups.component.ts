import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { GroupService } from '../shared/services/group.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { UserData } from '../shared/models/user';
import { Group } from '../shared/models/group';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-company-groups',
  templateUrl: './user-company-groups.component.html',
  styleUrls: ['./user-company-groups.component.css']
})
export class UserCompanyGroupsComponent implements OnInit {
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
        this.getCompanyGroups(loginUser.urlContext, loginUser.companyUrlContext);
      }else {
        this.router.navigate(['/']);
      }
    });
  }

  getCompanyGroups(userUrlContext: string, companyUrlContext: string): void {
    this.spinner.show();
    this.groupService.getCompanyGroups(userUrlContext, companyUrlContext).
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

  todoInfo(): void{
    Swal.fire('Information', 'This feature is planned in near future.', 'info');
  }
}
