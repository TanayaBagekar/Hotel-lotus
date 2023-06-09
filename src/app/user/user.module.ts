import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user.component';
import { SignupComponent } from './signup/signup.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { BookingHotelFormComponent } from './booking-hotel-form/booking-hotel-form.component';
import { EndingComponent } from './ending/ending.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'



@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    SignupComponent,
    BookingHotelFormComponent,
    EndingComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    MatButtonModule,
    FormsModule
  ]
})
export class UserModule { }
