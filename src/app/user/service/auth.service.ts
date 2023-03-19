import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  getHotelList(){
    return this.http.get('http://localhost:3000/hotelDetails')
  }
}
