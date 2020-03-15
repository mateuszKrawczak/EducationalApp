import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/categoryService';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Array<Category>;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

}
