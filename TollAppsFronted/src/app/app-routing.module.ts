import {inject, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {EventService} from "./service/event-service";

const routes: Routes = [

  {
    path: "login",
    data: {
      roles: ["ROLE_GUEST"], animation: 'login', seo: {
        data: {
          page_title: "Tollapps - Belépés",
          og_title: "Tollapps - Belépés",
          twitter_title: "Tollapps - Belépés"
        }
      }
    },
    component: LoginComponent
  },

  {
    path: "home",
    data: {
      roles: ["ROLE_USER"], animation: 'home', seo: {
        data: {
          page_title: "Tollapps - Jelentkezés",
          og_title: "Tollapps - Jelentkezés",
          twitter_title: "Tollapps - Jelentkezés"
        }
      }
    },
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
export class AppRoutingModule {
}
