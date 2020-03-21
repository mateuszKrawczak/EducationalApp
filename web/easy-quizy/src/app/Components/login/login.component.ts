import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/authService';
import { StorageService } from 'src/app/Services/storageService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private toastr: ToastrService, 
    private authService:AuthService, private storageService:StorageService, private router:Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    });

  }

  login(event){
    event.preventDefault();
    this.authService.login(this.loginForm.get('login').value, this.loginForm.get('password').value).subscribe(data => {
      this.storageService.setLogin(data.login);
      this.storageService.setUserId(data.user_id);
      this.toastr.success('Witamy');
      this.authService.logged=true;
      this.router.navigate(['/categories']);
    }, error => {
      
      this.toastr.error('Zły login lub hasło', 'Błąd :(');
    })
  }

}
