import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { CompanyService } from '../shared/services/company.service';
import { CompanyData } from '../shared/models/company';
import { map, catchError } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit, OnDestroy {
  urlContext: string;
  private subscribe: Subscription;
  companyDetail: CompanyData;
  constructor(private readonly route: ActivatedRoute,
              private readonly companyService: CompanyService,
              private readonly spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.subscribe = this.route.params.subscribe(params => {
      this.urlContext = params.urlContext;
      this.getCompaniesDetails();
   });
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  getCompaniesDetails(): void {
    this.spinner.show();
    this.companyService.getCompaniesDetails(this.urlContext).
    pipe(
      map((data: CompanyData) => {
        this.spinner.hide();
        return data;
      }), catchError(error => {
        this.spinner.hide();
        return throwError('Something went wrong!');
      })
    ).subscribe((data: CompanyData) => {
      this.companyDetail = data;
    });
  }
}
