import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { StorageService } from 'src/app/Services/storageService';
import { UserService } from 'src/app/Services/userService';
import { User } from 'src/app/Models/user';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.scss']
})
export class AccountMainComponent implements OnInit {

  public userForm :FormGroup;
  user:User ;
  private id;
  constructor(private toastrService:ToastrService,private storageService : StorageService, private userService:UserService, private fb:FormBuilder) {
    
    
   }

  ngOnInit(): void {
    
    this.getUserData();
    
  }

  getUserData(){
    this.id = this.storageService.getUserId();
    this.userService.getUser(this.id).subscribe((currentUser) => {
      this.user = currentUser;
      //console.log(currentUser);
      this.updateForm();
    });
    
    
  }
  
  updateForm(){
    this.userForm = this.fb.group({
      first_name: [this.user.first_name, Validators.required],
      last_name: [this.user.last_name, Validators.required],
      login: [this.user.login, Validators.required],
      password: [this.user.password, Validators.required],
      email: [this.user.email, [Validators.required,Validators.email]]
    });
  }

  public changeUserData(){
   
    if(this.userForm.valid){
        this.userService.changeUserData(this.userForm.value,this.id).subscribe((editedUser)=>{
          this.user = editedUser;
          //this.updateForm();
          this.toastrService.success('Konto zostało zaktualizowane', 'Miłej gry!');
    }, error => {
      this.toastrService.success('Błąd');
    })
    }

  }
}
