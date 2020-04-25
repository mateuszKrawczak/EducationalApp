import { Component, OnInit, Input } from '@angular/core';
import { ScoreAverage } from 'src/app/Models/score-average';
@Component({
  selector: 'app-score-view',
  templateUrl: './score-view.component.html',
  styleUrls: ['./score-view.component.scss']
})
export class ScoreViewComponent implements OnInit {

  @Input() score:ScoreAverage;

  maxScore: number;

  constructor() { }

  ngOnInit(): void {
    switch(this.score.level){
      case 'junior':
        this.maxScore = 50;
        break;
      case 'senior':
        this.maxScore = 125;
        break;
      case 'ekspert':
        this.maxScore = 250;
        break;
    }
  }

}
