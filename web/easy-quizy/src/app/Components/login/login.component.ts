import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/authService';
import { StorageService } from 'src/app/Services/storageService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private toastr: ToastrService, 
    private authService:AuthService, private storageService:StorageService) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    });

  }

  login(event){
    event.preventDefault();
    // this.authService.login(this.loginForm.get('login').value, this.loginForm.get('password').value).subscribe(data => {
    //   this.storageService.setLogin(data.login);
    //   this.storageService.setUserId(data.user_id);
    //   this.toastr.success('Welcome');
    // }, error => {
    //   this.toastr.error('Wrong login or password', 'Error');
    // })
    this.toastr.error('Tego sie nie spodziewales', 'Elo');
  }

}
