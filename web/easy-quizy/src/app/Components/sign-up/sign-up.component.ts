import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventManager } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm :FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router,
    private toastrService:ToastrService) { }

  ngOnInit(): void {

    const emailPattern = '^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$';
    const passwordPattern = '^(?=.*[0-9])(?=.*[a-z]).{6,40}$';

    this.signUpForm =this.formBuilder.group( {
      firstName: [null,Validators.required],
      lastName: [null,Validators.required],
      email: [null, [Validators.required, Validators.pattern(emailPattern)]],
      login: [null,Validators.required],
      password: [null, [Validators.required, Validators.pattern(passwordPattern)]]
    });
  }


  signUp(event){
    event.preventDefault();
    this.router.navigate(['/login']);
    this.toastrService.success('trzeba dodać prawdziwą rejestrację do bazy');
  }
}
