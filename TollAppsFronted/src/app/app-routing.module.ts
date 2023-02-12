import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";

const routes: Routes = [

  {
    path: "",
    pathMatch: "full",
    redirectTo: "event"
  },

  {
    path: "login",
    data: {roles: ["ROLE_GUEST"]},
    component: LoginComponent
  },

  {
    path: "event",
    data: {roles: ["ROLE_GUEST"]},
    loadComponent: () => import("./pages/event/event.component").then(m => m.EventComponent)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "ignore"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
