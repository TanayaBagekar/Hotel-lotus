import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingHotelFormComponent } from './booking-hotel-form/booking-hotel-form.component';
import { EndingComponent } from './ending/ending.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: 'home', component: UserComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  {path: 'bookform',component:BookingHotelFormComponent},
  {path:'end',component:EndingComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
