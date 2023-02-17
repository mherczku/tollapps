import {Component} from '@angular/core';
import {ChildrenOutletContexts} from "@angular/router";
import {routeAnimations} from "./animations/route/route.animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {
  title = 'TollApps';

  constructor(private contexts: ChildrenOutletContexts) {
  }

  getRouteAnimationData() {
    //console.log(this.contexts.getContext('primary')?.route?.snapshot?.pathFromRoot)
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];

    //console.log(this.router.url)
    //return this.router.url
  }
}
