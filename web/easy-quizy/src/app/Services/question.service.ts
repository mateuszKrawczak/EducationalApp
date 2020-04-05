import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{environment} from '../../environments/environment';
import { Question } from '../Models/question';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  host:string = environment.host;

  constructor(private http:HttpClient) { }

  getQuestions(categoryName, level):Observable<Array<Question>> {
    return this.http.get<Array<Question>>(this.host 
      + `api/questions?category=${categoryName}&level=${level}`);
  }
  
  addQuestion(question:Question):Observable<any> {
    return this.http.post(this.host + 'api/questions', question);
  }

}
