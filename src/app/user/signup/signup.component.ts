import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  userSignupForm =new FormGroup({
    fname: new FormControl('',[Validators.required]),
    lname: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    DOB: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.email]),
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    cpassword: new FormControl('',[Validators.required]),

  })

  getData(data:any){
    console.log(data.value);
    
  }

}
