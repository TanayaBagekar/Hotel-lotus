import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from "@angular/forms";

@Component({
  selector: 'app-booking-hotel-form',
  templateUrl: './booking-hotel-form.component.html',
  styleUrls: ['./booking-hotel-form.component.scss']
})
export class BookingHotelFormComponent {

  email:any;

  registerForm=new FormGroup({
    fname: new FormControl('',[Validators.required]),
    username: new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required, Validators.email]),
    phone:new FormControl('',[Validators.required]),
    bdate:new FormControl('',[Validators.required]),
    odate:new FormControl ('',Validators.required),
    amount:new FormControl('',Validators.required),
    transaction: new FormControl('upi',[Validators.required]),


  })

   errorMsg(){
    if( this.email.hasError('required') ){
      return 'Enter the data';
    }
    return this.email.hasError('email')? 'invalid email ':'';
   }



   hotelData(value:any){
    console.log(value);
    
   }
}
