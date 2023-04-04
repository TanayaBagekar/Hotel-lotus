import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url='http://localhost:3000/admin'

  constructor(private http:HttpClient) { }

  getAdminList(){
    return this.http.get(this.url)
  }

  getAdminListbyId(id:any){
    return this.http.get(`http://localhost:3000/admin/${id}`)
  }

  getAdminPost(data:any){
    return this.http.post(this.url, data)
  }

  updateAdmin(id:number, data:any): Observable<any> {
    return this.http.put(`http://localhost:3000/admin/${id}`, data)
  }

  deleteAdmin(id:number): Observable<any> {
    return this.http.delete(`http://localhost:3000/admin/${id}`);
  }
}
