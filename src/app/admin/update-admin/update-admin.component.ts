import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../service/auth.service'


@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.scss']
})
export class UpdateAdminComponent implements OnInit {

  AdminForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private dialog: MatDialogRef<UpdateAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {
    this.AdminForm = this.builder.group({
      fname:['',[Validators.required]],
      lname: ['',[Validators.required]],
      phone: ['',[Validators.required]],
      age: ['', Validators.required],
      gender: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      id: ['',[Validators.required]],
      password: ['',[Validators.required, Validators.pattern]],
    })
  }

  ngOnInit(): void {
    this.AdminForm.patchValue(this.data)
  }

  AdminRegistr() {
    if (this.AdminForm.valid) {
      if (this.data) {
        this.service.updateAdmin(this.data.id, this.AdminForm.value).subscribe({
          next: (val: any) => {
            alert('Hotel Detail Updated Successfully !!');
            this.dialog.close(true);

          },
          error: (err: any) => {
            alert(err + "some error occurred")
          }
        })
      } else {
        console.log(this.AdminForm.value)
        this.service.getAdminPost(this.AdminForm.value).subscribe({
          next: (val: any) => {
            alert('Admin Registration Successfull');
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
