import { Component } from '@angular/core';
import { FormBuilder ,FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-hotel-register',
  templateUrl: './hotel-register.component.html',
  styleUrls: ['./hotel-register.component.scss']
})
export class HotelRegisterComponent {

  newRegistrationForm:any;

  constructor(private http:AuthService,
    private builder:FormBuilder){

      this.http.Getall().subscribe((data)=>{
        console.log(data);
        
      })
    }

    registration= new FormGroup({
     uname: new FormControl('',[Validators.required]) ,
     email: new FormControl('',[Validators.required, Validators.email]),
     Hname:new FormControl('',[Validators.required]),
     Troom:new FormControl('',[Validators.required]),
     location: new FormControl('',[Validators.required]),
     area:new FormControl('',[Validators.required]),
     sDish:new FormControl('',[Validators.required]),
     discription: new FormControl('',[Validators.required]),

    })

 getdata(data:any){
  console.log(data);
  }
  register(){
    this.http.registerHotel
  }



  
  



}
