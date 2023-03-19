import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url='http://localhost:3000/admin'

  constructor(private http:HttpClient) { }

  getAdminList(){
    return this.http.get(this.url)
  }

  getAdminPost(data:any){
    return this.http.post(this.url, data)
  }

}
