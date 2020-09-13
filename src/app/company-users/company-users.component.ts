import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { CompanyService } from '../shared/services/company.service';
import { map, catchError } from 'rxjs/operators';
import { User } from '../shared/models/user';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-company-users',
  templateUrl: './company-users.component.html',
  styleUrls: ['./company-users.component.css']
})
export class CompanyUsersComponent implements OnInit, OnDestroy {
  uuid: string;
  private subscribe: Subscription;
  companyUser: User;
  constructor(private readonly route: ActivatedRoute,
              private readonly companyService: CompanyService,
              private readonly spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.subscribe = this.route.params.subscribe(params => {
      this.uuid = params.uuid;
      this.getCompaniesUsers();
   });
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  getCompaniesUsers(): void {
    this.spinner.show();
    this.companyService.getCompaniesUsers(this.uuid).
    pipe(
      map((data: User) => {
        this.spinner.hide();
        return data;
      }), catchError(error => {
        this.spinner.hide();
        return throwError('Something went wrong!');
      })
    ).subscribe((data: User) => {
      this.companyUser = data;
    });
  }

  onRoleChange(event: any, userUuid: string): boolean {
    Swal.fire('Information', 'This feature is planned in near future.', 'info');
    event.preventDefault();
    return false;
    /*if (!event.target.checked) {
      console.log(event);
      let isOtherAdmin = false;
      this.companyUser.data.forEach( (currentUser) => {
        if (userUuid !== currentUser.uuid && currentUser.role === 'ADMIN'){
          isOtherAdmin = true;
        }
      });
      if (!isOtherAdmin){
        alert('Not allowed');
        event.preventDefault();
        return false;
      }
    }
    return true;*/
  }
}
