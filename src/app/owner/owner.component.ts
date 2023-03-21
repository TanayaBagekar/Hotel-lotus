
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HotelRegisterComponent } from './hotel-register/hotel-register.component'
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'oname',
    'hname',
    'email',
    'phone',
    'username',
    'gender',
    'DOB',
    'password',
    'cpassword',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private service: AuthService,
    // @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.Getall();
  }

  ownerRegister() {
    const dialogRef = this.dialog.open(HotelRegisterComponent)
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.Getall();
        }
      }
    })
  }

  Getall() {
    this.service.Getall().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(res)
      },
      error: console.log,
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteOwner(id: number) {
    this.service.deleteOwner(id).subscribe({
      next: (res: any) => {
        this.Getall();
      },
      error: console.log,
    })
  }

  openHotelForm(data: any) {
    const dialogRef = this.dialog.open(HotelRegisterComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.Getall();
        }
      }
    })
  }

}
