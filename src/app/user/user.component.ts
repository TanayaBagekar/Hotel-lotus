import { Component } from '@angular/core';
import {AuthService} from './service/auth.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  hotels:any;

  constructor(
    private service: AuthService
  ){
    this.service.getHotelList().subscribe((data)=>{
      console.log(data)
      this.hotels = data;
    })
  }


}
