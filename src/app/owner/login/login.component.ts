import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: any;
  hotelDetails: any;
  hotelListByOwner: any;
  ownerData: any;
  validOwner: any;
  ownerSuccesData: any;
  name: any;

  constructor(public http: AuthService, private router: Router) { }


  ngOnInit(): void {
    this.hotelDetailsGetApiCall();
    this.OwnerGetAPiCall();
  }

  ownerLogin(item: any) {
    console.log(item)
    console.log(item.username)
    console.log(item.pass)

  }
  hotelDetailsGetApiCall() {
    this.http.getHotelList().subscribe((data) => {
      this.hotelDetails = data
      console.log(data);
    })
  }

  OwnerGetAPiCall() {
    this.http.getHotelList().subscribe((data) => {
      this.ownerData = data

    })

    console.log(this.ownerData);
  }


  submit() {
    if (this.hotelDetails) {
      this.hotelDetails.forEach((element: any) => {
        if (this.loginForm.value.username = element.username) {
          this.hotelListByOwner.push(element);
        }
        this.http.getHotelList = this.hotelListByOwner;
        console.log(this.http.getHotelList);

      })

    }
    if (this.ownerData) {
      this.validOwner = this.ownerData.find((dataBase: any) => {
        return dataBase.username === this.loginForm.username && dataBase.pass === this.loginForm.value.pass
      })
      console.log(this.ownerSuccesData);

    }
    this.redirection()

  }
  redirection() {
    if (this.loginForm.username === "Tanaya") {
      if (this.loginForm.pass === "Tanaya@123") {
        location.href = 'http://localhost:4200/owner/succes'
      } else {
        alert("Wrong PassWord !!")
      }
    } else {
      location.href = 'http://localhost:4200/owner/signup'
    }


  }

}
