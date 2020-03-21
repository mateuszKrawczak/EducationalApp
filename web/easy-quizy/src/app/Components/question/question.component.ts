import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { QuestionService } from "src/app/Services/questionService";
import { Question } from "src/app/Models/question";
import { StorageService } from 'src/app/Services/storageService';
@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"]
})
export class QuestionComponent implements OnInit {
  
  questions: Array<Question>;
  currentQuestion: Question;

  // obecnie pytanie
  currentIndex: number = 0;

  // tablica pytań, żeby można było po nich iterować z ngFor
  answers = [];
  
  // status przycisku do ustawienia jego klasy
  selected: number = -1;
  good: number = -1;
  wrong: number = -1;

  questionsLeft: number = 1; // tutaj ustawimy potem ile pytań na rundę
  nextRound: boolean = false;
  buttonLabel: string = "Sprawdz!";

  category;

  // staty użytkownika

  goodAnswers: number = 0;
  wrongAnswers: number = 0;
  points: number = 0;

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.url[0];
    let level = this.activatedRoute.snapshot.url[1];

    this.questionService.getQuestions(this.category.path, level).subscribe(questions => {
      this.questions = questions;
      if(this.questions){
        this.currentQuestion = this.questions[this.currentIndex];
        this.setAnswers();
      }
    },e =>{console.error(e)});
  }

  setAnswers(){
    this.answers.push(this.currentQuestion.answer_0);
    this.answers.push(this.currentQuestion.answer_1);
    this.answers.push(this.currentQuestion.answer_2);
    this.answers.push(this.currentQuestion.answer_3);
  }

  clearAnswers() {
    this.answers = [];
  }

  select(index: number){
    this.selected = index;
  }

  check(){
    if(!this.nextRound){
      if(this.currentQuestion.correct == this.selected){
        this.good = this.selected;
        this.wrong = -1;
        this.goodAnswers++;
        this.points += this.currentQuestion.level.points;
      }
      else{
        this.wrong = this.selected;
        this.good = this.currentQuestion.correct;
        this.wrongAnswers++;
      }
      this.nextRound = true;
      this.buttonLabel = "Dalej !";
    }
    else{
      // na kolejną rundę
      this.selected = -1;
      this.wrong = -1;
      this.good = -1;
      this.buttonLabel = "Sprawdź !";
      this.nextRound = false;
      this.questionsLeft--;
      if(this.questionsLeft > 0) {
        this.currentQuestion = this.questions[++this.currentIndex];
      }
      else{
        // tutaj będzie szedł request do bazy zapisaniem wyniku, narazie same logi
        // musimy ustalić w sumie czy jeden poziom można robić tylko raz czy wiele
        // bo wtedy muszę chyba pomyśleć jak to przechowywać w bazie (jeśli wiele)
        console.log('Użytkownik: ' + this.storageService.getLogin());
        console.log('Dobre odpowiedzi: ' + this.goodAnswers);
        console.log('Złe odpowiedzi: ' + this.wrongAnswers);
        console.log('Punkty: ' + this.points);
        this.router.navigate([this.category.path,"poziomy"]);
      }
    }
  }

  getAnswerClass(index: number){
    if(index == this.wrong) return "answer wrong col-md-5";
    if(index == this.good) return "answer good col-md-5";
    if(index == this.selected) return "answer selected col-md-5";
    return "answer col-md-5";
  }

}
