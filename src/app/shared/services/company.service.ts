import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Company } from '../models/company';

@Injectable()
export class CompanyService {

    private readonly COMPANY = environment.bookmark_service_api_url + '/api/v1/companies';

    constructor(private readonly http: HttpClient) {

    }
    getCompanies(): Observable<Company>{
        return this.http.get<Company>(this.COMPANY);
    }
}
