import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-hotel-register',
  templateUrl: './hotel-register.component.html',
  styleUrls: ['./hotel-register.component.scss']
})
export class HotelRegisterComponent implements OnInit {


  registration: FormGroup;

  constructor(
    private http: AuthService,
    private builder: FormBuilder,
    private dialog: MatDialogRef<HotelRegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.registration = this.builder.group({

      id: this.builder.control('', Validators.required),
      oname: this.builder.control('', Validators.required),
      hname: this.builder.control('', Validators.required),
      email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
      username: this.builder.control('', Validators.required),
      phone: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
      gender: this.builder.control('', Validators.required),
      DOB: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(8)])),
      cpassword: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(8)]))
    })
  }

  ngOnInit(): void {
    this.registration.patchValue(this.data)
  }

  OwnerRegistr(){
    if(this.registration) {
      if(this.data){
        this.http.updateOwner(this.data.id, this.registration.value).subscribe({
          next: (val:any) => {
            alert('Owner Detail Updated Successfully !!');
            this.dialog.close(true);
  
          },
          error: (err:any)=>{
            alert("some error occurred")
          }
        })
      }else {
        console.log(this.registration.value)
      this.http.registerOwner(this.registration.value).subscribe({
        next: (val:any) => {
          alert('Owner Registration Successfull');
          this.dialog.close(true);

        },
        error: (err:any)=>{
          alert("some error occurred")
        }
      })
      }
    }
  }
}











