import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Score } from 'src/app/Models/score';

@Component({
  selector: 'app-score-dialog',
  templateUrl: './score-dialog.component.html',
  styleUrls: ['./score-dialog.component.scss']
})
export class ScoreDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public score: Score,
    public dialogRef: MatDialogRef<ScoreDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
