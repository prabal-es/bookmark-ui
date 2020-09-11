import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../shared/services/company.service';
import { Company } from '../shared/models/company';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  companies: Company;

  constructor(private readonly companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanies().
      pipe(
        map((data: Company) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      ).subscribe((data: Company) => {
        console.log(data);
        this.companies = data;
      });
  }

}
