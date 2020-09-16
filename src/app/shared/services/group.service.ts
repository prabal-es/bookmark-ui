import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card, CardData } from '../models/card';
import { Group, GroupData } from '../models/group';

@Injectable()
export class GroupService {

    private readonly GROUP = environment.bookmark_service_api_url + '/api/v1/groups';
    constructor(private readonly http: HttpClient) { }
    getSelfGroups(userUrlContext: string, companyUrlContext: string): Observable<Group> {
        return this.http.get<Group>(this.GROUP, {
            headers: new HttpHeaders({
                'company-context': companyUrlContext,
                'user-context': userUrlContext }),
            params: { type: 'SELF' }
        });
    }
    getCompanyGroups(userUrlContext: string, companyUrlContext: string): Observable<Group> {
        return this.http.get<Group>(this.GROUP, {
            headers: new HttpHeaders({
                'company-context': companyUrlContext,
                'user-context': userUrlContext }),
            params: { type: 'ALL' }
        });
    }
    createGroup(userUrlContext: string, companyUrlContext: string, data: GroupData): Observable<GroupData> {
        return this.http.post<GroupData>(this.GROUP, data, {
            headers: new HttpHeaders({
                'company-context': companyUrlContext,
                'user-context': userUrlContext })
        });
    }

    getCardsOfTypeCard(userUrlContext: string, companyUrlContext: string): Observable<Card> {
        return this.http.get<Card>(this.GROUP, {
            headers: new HttpHeaders({
                'company-context': companyUrlContext,
                'user-context': userUrlContext }),
            params: { type: 'CARD' }
        });
    }

    getGroupDetails(urlContext: string): Observable<GroupData>{
        return this.http.get<GroupData>(this.GROUP + '/' + urlContext);
    }

    updateGroupAdmins(urlContext: string, adminIds: string[]): Observable<GroupData>{
        return this.http.post<GroupData>(this.GROUP + '/' + urlContext + '/users', adminIds);
    }
}
