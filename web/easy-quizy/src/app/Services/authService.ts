import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Log } from '../Models/log';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    host = environment.host;

    constructor(private http: HttpClient) {}

    login(login: string, password: string): Observable<Log> {
        return this.http.post<Log>(this.host + 'api/auth/login', {login: login, password: password});
    }

}