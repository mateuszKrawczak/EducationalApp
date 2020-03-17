import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { QuestionService } from "src/app/Services/questionService";
import { Question } from "src/app/Models/question";
import { Observable } from "rxjs";
@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  questions: Array<Question>;

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let categoryName = this.activatedRoute.snapshot.url[0];

    this.questionService.getQuestions(categoryName).subscribe(questions => {
      this.questions = questions;
    },e =>{console.error(e)});
    console.log(this.questions);
  }
}
