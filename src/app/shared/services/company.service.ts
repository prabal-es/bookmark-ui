import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Company, CompanyData } from '../models/company';
import { User } from '../models/user';

@Injectable()
export class CompanyService {

    private readonly COMPANY = environment.bookmark_service_api_url + '/api/v1/companies';

    constructor(private readonly http: HttpClient) {

    }
    getCompanies(): Observable<Company>{
        return this.http.get<Company>(this.COMPANY);
    }

    getCompaniesDetails(uuid: string): Observable<CompanyData>{
        return this.http.get<CompanyData>(this.COMPANY + '/' + uuid);
    }

    getCompaniesUsers(uuid: string): Observable<User>{
        return this.http.get<User>(this.COMPANY + '/' + uuid + '/users');
    }
}
