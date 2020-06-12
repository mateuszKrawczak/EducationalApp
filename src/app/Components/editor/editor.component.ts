import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Level } from 'src/app/Models/level';
import { Category } from 'src/app/Models/category';
import { LevelService } from 'src/app/Services/level.service';
import { CategoryService } from 'src/app/Services/category.service';
import { QuestionService } from 'src/app/Services/question.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private levelService:LevelService, 
    private categoryService:CategoryService, private questionService:QuestionService,
    private toastrService:ToastrService) { }

  addForm: FormGroup;
  categories: Array<Category>;
  levels: Array<Level>;

  ngOnInit(): void {

    this.addForm = this.formBuilder.group({
      question: [null, Validators.required],
      answer_0: [null, Validators.required],
      answer_1: [null, Validators.required],
      answer_2: [null, Validators.required],
      answer_3: [null, Validators.required],
      correct: [null],
      category_id: [null],
      level_id: [null],
    })
    this.levelService.getLevels().subscribe(data => {
      this.levels = data;
    })
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  addQuestion(event){
    event.preventDefault();
    this.questionService.addQuestion(this.addForm.value).subscribe(data => {
      console.log(data);
      this.toastrService.success('Dodano!');
      this.addForm.reset();
    }, error => {
      this.toastrService.success('Błąd :/');
    })
  }

}
