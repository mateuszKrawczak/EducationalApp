import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { QuestionService } from "src/app/Services/questionService";
import { Question } from "src/app/Models/question";
import { Observable } from "rxjs";
@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"]
})
export class QuestionComponent implements OnInit {
  
  questions: Array<Question>;
  currentQuestion: Question;
  currentIndex = 0;

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let categoryName = this.activatedRoute.snapshot.url[0];
    let level = this.activatedRoute.snapshot.url[1];

    this.questionService.getQuestions(categoryName, level).subscribe(questions => {
      this.questions = questions;
      console.log(this.questions);
      this.currentQuestion = this.questions[this.currentIndex];
    },e =>{console.error(e)});
    
  }

}
