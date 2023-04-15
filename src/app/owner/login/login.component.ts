import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

 password:any

 constructor(private service:AuthService,private router:Router){}

 submit(data:any){
  console.log(data)
    this.service.gethotelOwnerList(data.username).subscribe((res) => {
      console.log(res)
      this.password = res
      if(this.password.password === data.pass){
        this.router.navigateByUrl('/owner/home')
        alert("admin login successfull")
      }else{
        this.router.navigateByUrl('/')
        alert("please check the password")
      }
    })
 }

}
