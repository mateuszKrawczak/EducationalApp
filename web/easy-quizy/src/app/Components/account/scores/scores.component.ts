import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/userService';
import { Score } from 'src/app/Models/score';
import { StorageService } from 'src/app/Services/storageService';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {


  scores: Array<Score>;
  id: number;

  constructor(private userService:UserService, private storageService:StorageService) { }

  ngOnInit(): void {

    this.id = +this.storageService.getUserId();

    this.userService.getUserScores(this.id).subscribe(data => {
      this.scores = data;
    })

  }

}
