import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserData } from '../models/user';

@Injectable()
export class LoginService {
    private userSource = new BehaviorSubject(new UserData());
    currentUser = this.userSource.asObservable();

    constructor() { }

    changeLoginUser(user: UserData) {
        this.userSource.next(user);
    }
}
