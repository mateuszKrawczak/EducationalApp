import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Score } from '../Models/score';

@Injectable({
    providedIn: 'root'
})

export class ScoreService {
    
    host = environment.host;

    constructor(private http:HttpClient) {}

    addScore(score:Score):Observable<any> {
        return this.http.post(this.host + 'api/scores', {
            points: score.points,
            good_answers: score.good_answers,
            wrong_answers: score.wrong_answers,
            category_id: score.category.category_id,
            level_id: score.level.level_id,
            user_id: score.user.user_id
        });
    }

}