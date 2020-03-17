import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/Models/level';

@Component({
  selector: 'app-category-levels',
  templateUrl: './category-levels.component.html',
  styleUrls: ['./category-levels.component.scss']
})
export class CategoryLevelsComponent implements OnInit {

 levels:Array<Level>;

  constructor() { }

  ngOnInit(): void {
    this.levels=[{name:"junior"},{name:"senior"},{name:"ekspert"}];
  }

}
