import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authgard/auth.guard';
import{DashboardComponent} from './MyComponents/dashboard/dashboard.component'
import{LoginComponent} from './MyComponents/login/login.component'

const routes: Routes = [
  { path: '', redirectTo: 'login',  pathMatch: 'full' },
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
