import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    UpdateAdminComponent,
    SignupComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatPaginatorModule,
    MatIconModule,
    MatToolbarModule,
    
  ]
})
export class AdminModule { }
