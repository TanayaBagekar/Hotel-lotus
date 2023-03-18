import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelRegisterComponent } from './hotel-register/hotel-register.component';
import { LoginComponent } from './login/login.component';
import { OwnerSuccesComponent } from './owner-succes/owner-succes.component';
import { OwnerComponent } from './owner.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'home', component: OwnerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path:'hotel',component:HotelRegisterComponent},
  {path:'succes',component:OwnerSuccesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
