import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm =new FormGroup({
    fname: new FormControl('',[Validators.required]),
    lname: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    DOB: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('',[Validators.email]),
    username: new FormControl(''),
    password: new FormControl(''),
    cpassword: new FormControl(''),

  })

  getValue(data:any){
    console.log(data.value);
    
  }
}