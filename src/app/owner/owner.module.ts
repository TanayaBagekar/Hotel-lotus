import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { HotelRegisterComponent } from './hotel-register/hotel-register.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { OwnerSuccesComponent } from './owner-succes/owner-succes.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    OwnerComponent,
    SignupComponent,
    LoginComponent,
    HotelRegisterComponent,
    OwnerSuccesComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    OwnerRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule ,
    MatDialogModule

  ]
})
export class OwnerModule { }
