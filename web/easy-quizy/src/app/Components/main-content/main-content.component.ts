import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private router:Router, private activeRoutes:ActivatedRoute) { }

  ngOnInit(): void {
  }


  signUpRouting(){
console.log("rejestracja");
  }
}
