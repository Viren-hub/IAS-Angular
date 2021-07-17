import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authgard/auth.guard';
import{DashboardComponent} from './MyComponents/dashboard/dashboard.component'
import { EventSteperComponent } from './MyComponents/event-steper/event-steper.component';
import{LoginComponent} from './MyComponents/login/login.component'

const routes: Routes = [
  { path: '', redirectTo: 'login',  pathMatch: 'full' },
  {path:'dashboard',component:DashboardComponent},
  // , canActivate:[AuthGuard]
  {path:'login',component:LoginComponent},
  {path:'events',component: EventSteperComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
