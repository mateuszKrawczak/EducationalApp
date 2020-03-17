import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/Models/level';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-levels',
  templateUrl: './category-levels.component.html',
  styleUrls: ['./category-levels.component.scss']
})
export class CategoryLevelsComponent implements OnInit {

 levels:Array<Level>;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.levels=[{level_id:"1",name:"junior",points:0},{level_id:"2",name:"senior",points:100},{level_id:"2",name:"ekspert",points:500}];
  }
  public redirectingToQuestions(elem){
    this.router.navigate([elem,"poziomy"]);
  }
}
