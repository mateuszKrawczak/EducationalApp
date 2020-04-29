import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../Services/storage.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private storageService:StorageService,private router:Router, private toastrService:ToastrService){

  }
  canActivate(): boolean {
   if(this.storageService.isLoggedIn()){
     return true;
   }

   this.toastrService.info('Musisz się zalogować');
   this.router.navigate(["/login"]);
   return false;
  }
  
}
