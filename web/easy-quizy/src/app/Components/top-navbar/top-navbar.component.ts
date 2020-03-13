import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  constructor(private router:Router, private routes:ActivatedRoute) { }

  ngOnInit(): void {
  }

  homeRouting(){
console.log("Clicked home");
  }

  accountRouting(){
    console.log("Clicked account");
  }
}
