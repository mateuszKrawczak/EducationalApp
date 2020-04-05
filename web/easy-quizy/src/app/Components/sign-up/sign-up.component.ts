import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventManager } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm :FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router,
    private toastrService:ToastrService, private authService:AuthService) { }

  ngOnInit(): void {

    const passwordPattern = '^(?=.*[0-9])(?=.*[a-z]).{6,40}$';

    this.signUpForm =this.formBuilder.group( {
      first_name: [null,Validators.required],
      last_name: [null,Validators.required],
      email: [null, [Validators.required, Validators.email]],
      login: [null,Validators.required],
      password: [null, [Validators.required, Validators.pattern(passwordPattern)]]
    });
  }


  signUp(event){
    event.preventDefault();
    this.authService.register(this.signUpForm.value).subscribe(data => {
      this.router.navigate(['/login']);
      this.toastrService.success('Konto zostało utworzone', 'Super!');
    }, error => {
      this.toastrService.success('Coś poszło nie tak', 'Ups :/');
    })
  }
}
