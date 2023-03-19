import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent
    
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule
  ]
})
export class AdminModule { }
