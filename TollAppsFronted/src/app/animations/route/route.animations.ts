import {transition, trigger} from "@angular/animations";
import {slideUpAnimation} from "./slide-up.animation";
import {slideDownAnimation} from "./slide-down.animation";
import {fadeAnimation} from "./fade.animation";

export const routeAnimations =
  trigger('routeAnimations', [
    transition( 'login => home', slideUpAnimation),
    transition('home => login', slideDownAnimation),
    transition('* => *', fadeAnimation)
  ]);
