import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { User } from '../Models/user';
import { Score } from '../Models/score';
@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient) {}

    host:string = environment.host;

    getUser(id):Observable<User>{
        return this.http.get<User>(this.host+"api/users/"+id);
    }

    getUserScores(id):Observable<Array<Score>>{
        return this.http.get<Array<Score>>(this.host+`api/users/${id}/scores`);
    }

    changeUserData(user:User,id):Observable<User>{
        return this.http.put<User>(this.host+"api/users/"+id, user);

    }
}