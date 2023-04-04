import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private service: AuthService,
    private router: Router) { }

  signupForm = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    gender: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(60)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    id: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required]),
  })

  getValue() {
    if (this.signupForm.valid) {
      if (this.signupForm.value) {
        this.service.registerOwner(this.signupForm.value).subscribe((res) => {
          console.log(res)
          alert("Owner Registered Successfully !!")
          this.router.navigateByUrl('/owner/login')
        })
      }else{
        alert("Please Enter Valid Data")
      }
    }
  }
  
  

}