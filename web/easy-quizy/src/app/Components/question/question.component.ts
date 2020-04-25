import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { QuestionService } from "src/app/Services/question.service";
import { Question } from "src/app/Models/question";
import { StorageService } from 'src/app/Services/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { ScoreDialogComponent } from '../score-dialog/score-dialog.component';
import { ScoreService } from 'src/app/Services/score.service';
import { Score } from 'src/app/Models/score';
import { User } from 'src/app/Models/user';
import { Category } from 'src/app/Models/category';
import { Level } from 'src/app/Models/level';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import { Subscription, Observable } from 'rxjs';
import { interval } from 'rxjs';
@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"]
})
export class QuestionComponent implements OnInit {
  
  questions: Array<Question>;
  currentQuestion: Question;

  //timer pytania
  spinnerValue:number = 100;
  timerSubscription:Subscription;
  secondsCounter = interval(1000);

  // obecnie pytanie
  currentIndex: number = 0;

  // tablica pytań, żeby można było po nich iterować z ngFor
  answers = [];
  
  // status przycisku do ustawienia jego klasy
  selected: number = -1;
  good: number = -1;
  wrong: number = -1;

  questionsLeft: number = 5; // tutaj ustawimy potem ile pytań na rundę
  nextRound: boolean = false;
  buttonLabel: string = "Sprawdz!";

  category: string;
  level: number;

  // staty użytkownika

  score: Score = {
    points:0,
    good_answers:0,
    wrong_answers:0,
    user: {} as User,
    category: {} as Category,
    level: {} as Level,
  };

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService,
    public dialog:MatDialog,
    private scoreService:ScoreService
  ) {}
  

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.url[0].path;
    this.level = +this.activatedRoute.snapshot.url[1].path;

    this.questionService.getQuestions(this.category, this.level).subscribe(questions => {
      this.questions = questions;
      if(this.questions){
        this.currentQuestion = this.questions[this.currentIndex]; 
        this.score.category.category_id = this.currentQuestion.category.category_id;
        this.setAnswers();
      }
    },e =>{console.error(e)});
    
    this.timerSubscription = this.secondsCounter.subscribe(seconds =>{
      if(this.spinnerValue!=0){
        if(!this.nextRound){
          this.timerTick();
        }
      }
      else{
        this.check();
      }
    });
    
  }

  timerTick(){
    this.spinnerValue-=5;
    
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
        this.score.good_answers++;
        this.score.points += this.currentQuestion.level.points;
      }
      else{
        this.wrong = this.selected;
        this.good = this.currentQuestion.correct;
        this.score.wrong_answers++;
      }
      this.nextRound = true;
      this.buttonLabel = "Dalej !";
      
    }
    else{
      // na kolejną rundę

      this.spinnerValue =100;

      this.selected = -1;
      this.wrong = -1;
      this.good = -1;
      this.buttonLabel = "Sprawdź !";
      this.nextRound = false;
      this.questionsLeft--;
      if(this.questionsLeft > 0 && this.questions.length > this.currentIndex+1) {
        this.currentQuestion = this.questions[++this.currentIndex];
        this.clearAnswers();
        this.setAnswers();
      }
      else{
        this.score.user.user_id = +this.storageService.getUserId();
        this.score.level.level_id = this.level;
        this.scoreService.addScore(this.score).subscribe(data => {})
        this.openDialog();
      }
    }
  }

  getAnswerClass(index: number){
    if(index == this.wrong) return "answer wrong col-md-5";
    if(index == this.good) return "answer good col-md-5";
    if(index == this.selected) return "answer selected col-md-5";
    return "answer col-md-5";
  }

  openDialog(){
    this.timerSubscription.unsubscribe();
    const dialogRef = this.dialog.open(ScoreDialogComponent, {
      width: '450px',
      height: '450px',
      autoFocus: true,
      data: this.score
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate([this.category,"poziomy"]);
    });
  }

}
