import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private http:AuthService){
  
  }

  signupForm =new FormGroup({
    fname: new FormControl('',[Validators.required]),
    lname: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    DOB: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    cpassword: new FormControl('',[Validators.required]),

  })

  getValue(data:any){
    console.log(data.value);
    this.http.registerOwner(this.signupForm.value).subscribe((data)=>{
      console.log(data);
      
     })
    
  }
  
  

}