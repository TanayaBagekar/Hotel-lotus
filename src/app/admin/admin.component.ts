import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './service/auth.service'
import { UpdateAdminComponent } from './update-admin/update-admin.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  displayedColumns: string[] = [
    'id',
    'fname',
    'lname',
    'email',
    'phone',
    'username',
    'gender',
    'DOB',
    'password',
    'cpassword',
    'action'
  ];

  tanaya:any;

  constructor(
    private dialog : MatDialog,
    private service : AuthService
  ){
    this.getAdminList()
  }

  adminRegister() {
    const dialogRef = this.dialog.open(UpdateAdminComponent)
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAdminList();
        }
      }
    })
  }

  getAdminList() {
    this.service.getAdminList().subscribe((data)=>{
      console.log(data)
      this.tanaya = data
    })
  }


  deleteAdmin(id: number) {
    this.service.deleteAdmin(id).subscribe({
      next: (res) => {
        alert("Hotel Deleted !!");
        this.getAdminList();
      },
      error: console.log,
    })
  }

  openAdminForm(data: any) {
    const dialogRef = this.dialog.open(UpdateAdminComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAdminList();
        }
      }
    })
  }


}
