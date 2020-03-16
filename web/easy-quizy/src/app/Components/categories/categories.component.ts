import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/categoryService';
import { Category } from 'src/app/Models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Array<Category>;

  constructor(private categoryService:CategoryService, private router:Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }
  public redirectingToLevels(elem){
    this.router.navigate([elem,"poziomy"]);
  }
}
