import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card, CardData } from '../models/card';

@Injectable()
export class CardService {

    private readonly CARD = environment.bookmark_service_api_url + '/api/v1/cards';
    constructor(private readonly http: HttpClient) { }
    getCardsOfTypeTiny(userUrlContext: string, companyUrlContext: string): Observable<Card> {
        return this.http.get<Card>(this.CARD, {
            headers: new HttpHeaders({
                'company-context': companyUrlContext,
                'user-context': userUrlContext }),
            params: { type: 'TINY' }
        });
    }

    createCardsOfTypeTiny(userUrlContext: string, companyUrlContext: string, data: CardData): Observable<CardData> {
        return this.http.post<CardData>(this.CARD, data, {
            headers: new HttpHeaders({
                'company-context': companyUrlContext,
                'user-context': userUrlContext })
        });
    }
}
