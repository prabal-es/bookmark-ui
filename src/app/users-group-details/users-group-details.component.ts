import { Component, OnInit } from '@angular/core';
import { GroupData } from '../shared/models/group';
import { LoginService } from '../shared/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { GroupService } from '../shared/services/group.service';
import { UserData, User } from '../shared/models/user';
import { Subscription, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AddUserComponent } from '../shared/popups/add-user.component';
import { SimpleModalService } from 'ngx-simple-modal';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-users-group-details',
  templateUrl: './users-group-details.component.html',
  styleUrls: ['./users-group-details.component.css']
})
export class UsersGroupDetailsComponent implements OnInit {
  urlContext: string;
  private subscribe: Subscription;
  loginUser: UserData;
  group: GroupData;
  constructor(private readonly route: ActivatedRoute,
              private readonly loginService: LoginService,
              private readonly router: Router,
              private readonly spinner: NgxSpinnerService,
              private readonly groupService: GroupService,
              private readonly simpleModalService: SimpleModalService,
              private readonly userService: UserService) { }

  ngOnInit(): void {
    this.subscribe = this.route.params.subscribe(params => {
      this.urlContext = params.urlContext;
   });
    this.loginService.currentUser.subscribe(loginUser => {
      this.loginUser = loginUser;
      if (loginUser.urlContext){
        this.getGroupDetails();
      }else {
        this.router.navigate(['/']);
      }
    });
  }

  addUser(): void {
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
      ).subscribe((user: User) => {
        this.simpleModalService.addModal(AddUserComponent,
          { title: 'Added Admin', users: user.data, adminUsers: this.group.adminUsers, groupUrl: this.urlContext})
          .subscribe((isConfirmed) => {
            this.getGroupDetails();
          });
      });
  }

  getGroupDetails(): void {
    this.spinner.show();
    this.groupService.getGroupDetails(this.urlContext).
    pipe(
      map((data: GroupData) => {
        this.spinner.hide();
        return data;
      }), catchError(error => {
        this.spinner.hide();
        return throwError('Something went wrong!');
      })
    ).subscribe((data: GroupData) => {
      this.group = data;
    });
  }
}
