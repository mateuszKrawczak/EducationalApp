import { Component, OnInit,Input } from '@angular/core';
import{Level} from '../../Models/level';
@Component({
  selector: 'app-category-levels-view',
  templateUrl: './category-levels-view.component.html',
  styleUrls: ['./category-levels-view.component.scss']
})
export class CategoryLevelsViewComponent implements OnInit {

  @Input() level:Level;

  constructor() { }

  ngOnInit(): void {
  }

}
