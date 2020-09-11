import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { CompanyService } from '../shared/services/company.service';
import { CompanyData } from '../shared/models/company';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit, OnDestroy {
  uuid: string;
  private subscribe: Subscription;
  companyDetail: CompanyData;
  constructor(private readonly route: ActivatedRoute, private readonly companyService: CompanyService) { }

  ngOnInit(): void {
    this.subscribe = this.route.params.subscribe(params => {
      this.uuid = params.uuid;
      this.getCompaniesDetails();
   });
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  getCompaniesDetails(): void {
    this.companyService.getCompaniesDetails(this.uuid).
    pipe(
      map((data: CompanyData) => {
        return data;
      }), catchError(error => {
        return throwError('Something went wrong!');
      })
    ).subscribe((data: CompanyData) => {
      console.log(data);
      this.companyDetail = data;
    });
  }
}
