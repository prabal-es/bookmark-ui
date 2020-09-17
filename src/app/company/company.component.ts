import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../shared/services/company.service';
import { Company } from '../shared/models/company';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies: Company;

  constructor(private readonly companyService: CompanyService, private readonly spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.spinner.show();
    this.companyService.getCompanies().
    pipe(
      map((data: Company) => {
        this.spinner.hide();
        return data;
      }), catchError(error => {
        this.spinner.hide();
        return throwError('Something went wrong!');
      })
    ).subscribe((data: Company) => {
      this.companies = data;
    });
  }
}
