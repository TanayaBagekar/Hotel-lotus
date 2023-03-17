import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
{ path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) }, 
{ path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
{path:'',component:HomeComponent},
{path:'**',component:PagenotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
