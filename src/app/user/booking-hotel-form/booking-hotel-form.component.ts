import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-booking-hotel-form',
  templateUrl: './booking-hotel-form.component.html',
  styleUrls: ['./booking-hotel-form.component.scss']
})
export class BookingHotelFormComponent {

  constructor(
    private router : Router,
    private service : AuthService
  ){}

  email: any;

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required]),
    bdate: new FormControl('', [Validators.required]),
    odate: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    payment: new FormControl('upi', [Validators.required]),
  })

  hotelData() {
    console.log(this.registerForm.value)
    this.service.postBookingForm(this.registerForm.value).subscribe((res)=>{
      console.log(res)
      this.router.navigateByUrl('/user/end')
    })
  }
}
