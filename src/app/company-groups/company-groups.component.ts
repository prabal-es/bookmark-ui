import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { CompanyService } from '../shared/services/company.service';
import { map, catchError } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Group } from '../shared/models/group';

@Component({
  selector: 'app-company-groups',
  templateUrl: './company-groups.component.html',
  styleUrls: ['./company-groups.component.css']
})
export class CompanyGroupsComponent implements OnInit, OnDestroy {
  urlContext: string;
  private subscribe: Subscription;
  companyGroup: Group;
  constructor(private readonly route: ActivatedRoute,
              private readonly companyService: CompanyService,
              private readonly spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.subscribe = this.route.params.subscribe(params => {
      this.urlContext = params.urlContext;
      this.getCompaniesGroups();
   });
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  getCompaniesGroups(): void {
    this.spinner.show();
    this.companyService.getCompaniesGroups(this.urlContext).
    pipe(
      map((data: Group) => {
        this.spinner.hide();
        return data;
      }), catchError(error => {
        this.spinner.hide();
        return throwError('Something went wrong!');
      })
    ).subscribe((data: Group) => {
      this.companyGroup = data;
    });
  }
}
