import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../Services/storageService';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private storageService:StorageService,private router:Router){

  }
  canActivate(): boolean {
   if(this.storageService.isLoggedIn()){
     return true;
   }

   this.router.navigate(["login"]);
   return false;
  }
  
}
