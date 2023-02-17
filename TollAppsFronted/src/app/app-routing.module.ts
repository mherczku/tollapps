import {inject, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {EventService} from "./service/event-service";

const routes: Routes = [

  {
    path: "login",
    data: {roles: ["ROLE_GUEST"], animation: 'login'},
    component: LoginComponent
  },

  {
    path: "home",
    data: {roles: ["ROLE_USER"], animation: 'home'},
    canMatch: [() => inject(EventService).hasUserPermission()],
    loadComponent: () => import("./pages/event/event.component").then(m => m.EventComponent)
  },

  {
    path: "**",
    pathMatch: "full",
    redirectTo: "login"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "ignore"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
