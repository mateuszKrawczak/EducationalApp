import { Component, OnInit, Input } from '@angular/core';
import { Score } from 'src/app/Models/score';

@Component({
  selector: 'app-score-view',
  templateUrl: './score-view.component.html',
  styleUrls: ['./score-view.component.scss']
})
export class ScoreViewComponent implements OnInit {

  @Input() score:Score;

  constructor() { }

  ngOnInit(): void {
  }

}
