import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { StorageService } from 'src/app/Services/storage.service';
import { CategoryService } from 'src/app/Services/category.service';
import { Category } from 'src/app/Models/category';
import { ScoreAverage } from 'src/app/Models/score-average';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  scores: Array<ScoreAverage>;
  id: number;
  categories: Array<Category>;
  categoryToShow;
  
  constructor(private userService:UserService, private storageService:StorageService, private categoryService:CategoryService) {}

  ngOnInit(): void {
    
    this.id = +this.storageService.getUserId();

    this.userService.getUserAverageScores(this.id).subscribe(data => {
      this.scores = data;
      console.log(this.scores);
    })

    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      this.categoryToShow = this.categories[0].name;
    })

  }

}
