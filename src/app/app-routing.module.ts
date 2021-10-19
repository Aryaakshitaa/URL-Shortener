import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphComponent } from './graph/graph.component';
import { ListURLComponent } from './list-url/list-url.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TrimURLComponent } from './trim-url/trim-url.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "shorten",
    component: TrimURLComponent
  },
  {
    path: "showURL",
    component: ListURLComponent
  },
  {
    path: "showGraph",
    component: GraphComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "register",
    component: SignupComponent
  },
  {
    path: "",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
