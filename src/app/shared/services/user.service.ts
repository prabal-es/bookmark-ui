import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

    private readonly USERS = environment.bookmark_service_api_url + '/api/v1/users';
    constructor(private readonly http: HttpClient) {}
    getUsers(): Observable<User>{
        return this.http.get<User>(this.USERS);
    }
}
