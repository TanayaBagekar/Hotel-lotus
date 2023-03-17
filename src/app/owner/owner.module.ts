import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OwnerComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    

  ]
})
export class OwnerModule { }
