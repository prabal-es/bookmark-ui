import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Company, CompanyData } from '../models/company';
import { User } from '../models/user';
import { Group } from '../models/group';

@Injectable()
export class CompanyService {

    private readonly COMPANY = environment.bookmark_service_api_url + '/api/v1/companies';

    constructor(private readonly http: HttpClient) {

    }
    getCompanies(): Observable<Company>{
        return this.http.get<Company>(this.COMPANY);
    }

    getCompaniesDetails(urlContext: string): Observable<CompanyData>{
        return this.http.get<CompanyData>(this.COMPANY + '/' + urlContext);
    }

    getCompaniesUsers(urlContext: string): Observable<User>{
        return this.http.get<User>(this.COMPANY + '/' + urlContext + '/users');
    }

    getCompaniesGroups(urlContext: string): Observable<Group>{
        return this.http.get<Group>(this.COMPANY + '/' + urlContext + '/groups');
    }
}
