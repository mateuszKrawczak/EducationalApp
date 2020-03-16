import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Log } from '../Models/log';
import { User } from '../Models/user';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    host = environment.host;

    constructor(private http: HttpClient) {}

    login(login: string, password: string): Observable<Log> {
        return this.http.post<Log>(this.host + 'api/auth/login', {login: login, password: password});
    }

    register(user:User):Observable<any> {
        return this.http.post(this.host + 'api/auth/register', {
            login: user.login,
            password: user.password,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        })
    }

}