import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/Models/level';
import { LevelService } from 'src/app/Services/level.service';

@Component({
  selector: 'app-category-levels',
  templateUrl: './category-levels.component.html',
  styleUrls: ['./category-levels.component.scss']
})

export class CategoryLevelsComponent implements OnInit {

 levels:Array<Level>;

  constructor(private levelService:LevelService) { }

  ngOnInit(): void {
    this.levelService.getLevels().subscribe(data => {
      this.levels = data;
    })  
  }

}
