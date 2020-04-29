import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-ranking-user-view',
  templateUrl: './ranking-user-view.component.html',
  styleUrls: ['./ranking-user-view.component.scss']
})
export class RankingUserViewComponent implements OnInit {

  @Input() user:User;
  @Input() place:number;

  constructor() { }

  ngOnInit(): void {
  }

}
