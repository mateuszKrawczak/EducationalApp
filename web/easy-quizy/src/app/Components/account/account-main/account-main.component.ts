import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { StorageService } from 'src/app/Services/storage.service';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/user';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.scss']
})
export class AccountMainComponent implements OnInit {

  userForm :FormGroup;
  user:User ;
  private id;

  constructor(private toastrService:ToastrService, private storageService : StorageService, 
      private userService:UserService, private fb:FormBuilder, private router:Router) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    this.id = this.storageService.getUserId();
    this.userService.getUser(this.id).subscribe((currentUser) => {
      this.user = currentUser;
      this.updateForm();
    });
  }
  
  updateForm(){
    const passwordPattern = '^(?=.*[0-9])(?=.*[a-z]).{6,40}$';

    this.userForm = this.fb.group({
      first_name: [this.user.first_name, Validators.required],
      last_name: [this.user.last_name, Validators.required],
      login: [this.user.login, Validators.required],
      password: [this.user.password, [Validators.required, Validators.pattern(passwordPattern)]],
      email: [this.user.email, [Validators.required,Validators.email]]
    });
  }

  public changeUserData(){
   
    if(this.userForm.valid){
      this.userService.changeUserData(this.userForm.value,this.id).subscribe((editedUser)=>{
        this.user = editedUser;
        this.toastrService.success('Konto zostało zaktualizowane', 'Miłej gry!');
      }, error => {
        this.toastrService.success('Błąd');
      })
    }

  }

  logout() {
    this.storageService.logout();
    this.router.navigate(['/login']);
    this.toastrService.success('Żegnaj!');
  }

}
