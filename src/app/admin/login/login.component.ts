import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private route:Router, private http: AuthService){
}


  adminLogin(item:any){
    console.log(item)
    console.log(item.username)
    console.log(item.pass)
    if(item.username === "Tanaya"){
      if(item.pass === "Tanaya@123"){
        this.route.navigate(['admin']) 
      }else{
        alert("Wrong PassWord !!")
      }
    }else {
      location.href = 'http://localhost:4200/pagenotFound'
    }
  }
}
