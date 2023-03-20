import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-hotel-register',
  templateUrl: './hotel-register.component.html',
  styleUrls: ['./hotel-register.component.scss']
})
export class HotelRegisterComponent implements OnInit{


  registration:FormGroup;
  newRegistrationForm:any;

  constructor(private http:AuthService,
    private builder:FormBuilder,
    private dialog:MatDialogRef<HotelRegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ){
       
     this.registration=this.builder.group({
    
      id:'',
      oname:'',
      hname:'',
      email:'',
      username:'',
      phone:'',
      gender:'',
      DOB:'',
      password:'',
      cpassword:''
     
     }) 
    }

    ngOnInit():void{
      this.registration.patchValue(this.data)
    }
     

  

 getdata(){
  if (this.registration.valid) {
    if (this.data) {
      this.http.updateOwner(this.data.id, this.registration.value).subscribe({
        next: (val: any) => {
          alert('Owner Detail Updated Successfully !!');
          this.dialog.close(true);

        },
        error: (err: any) => {
          alert(err + "some error occurred")
        }
      })
    } else {
      console.log(this.registration.value)
      this.http.registerOwner(this.registration.value).subscribe({
        next: (val: any) => {
          alert('Owner Registration Successfull');
          this.dialog.close(true);

        },
        error: (err: any) => {
          alert(err)
        }
      })
    }
  }
}
  }

  
  



  
  



