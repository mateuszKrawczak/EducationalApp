import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Level } from '../Models/level';

@Injectable({
    providedIn: 'root'
})

export class LevelService {

    host: string = environment.host;

    constructor(private http:HttpClient) {}

    getLevels():Observable<Array<Level>> {
        return this.http.get<Array<Level>>(this.host + 'api/levels');
    }

}