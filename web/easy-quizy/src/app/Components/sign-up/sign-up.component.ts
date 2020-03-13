import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm :FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.signUpForm =this.formBuilder.group( {
      firstName: [null,Validators.required],
      lastName: [null,Validators.required],
      email: [null,Validators.required],
      login: [null,Validators.required],
      password: [null,Validators.required]
    });
  }


  signUp(event){
console.log("Rejestracja");
  }
}
