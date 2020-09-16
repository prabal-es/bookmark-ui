import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card, CardData } from '../models/card';
import { Group } from '../models/group';

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
            params: { type: 'OTHER' }
        });
    }
    createCard(userUrlContext: string, companyUrlContext: string, data: CardData): Observable<CardData> {
        return this.http.post<CardData>(this.GROUP, data, {
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
}
