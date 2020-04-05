import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Score } from 'src/app/Models/score';
import { StorageService } from 'src/app/Services/storage.service';
import { CategoryService } from 'src/app/Services/category.service';
import { CategoryLevelsViewComponent } from '../../category-levels-view/category-levels-view.component';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {


  scores: Array<Score>;
  id: number;
  categories: Array<Category>;
  categoryScores:Array<Score>;
  categoryToShow;
  constructor(private userService:UserService, private storageService:StorageService, private categoryService:CategoryService) { 
    
  }

  ngOnInit(): void {
    
    this.id = +this.storageService.getUserId();

    this.userService.getUserScores(this.id).subscribe(data => {
      this.scores = data;
    })

    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      this.chooseCategory(this.categories[0].name);
    })

  }
  chooseCategory(name){

    this.categoryToShow=name;

    
  }

}
