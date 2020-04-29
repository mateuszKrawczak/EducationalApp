import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/Services/storage.service';
@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  constructor(private router:Router, private routes:ActivatedRoute, private storageService:StorageService) { }

  ngOnInit(): void {
  }

  // te funkcje były zbędne jak używamy AuthGuard

}
