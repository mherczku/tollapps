import {animate, group, query, style} from "@angular/animations";

export const slideUpAnimation = [
  style({position: 'relative'}),
  query(':enter, :leave', [
    style({
      position: 'fixed',
      height: '100%',
      width: '100%'
    })
  ], {optional: true}),
  group([
    query(':enter', [
      style({bottom: '-100%', opacity: 0}),
      animate('300ms ease-in', style({bottom: 0, opacity: 1}))
    ],{optional: true}),
    query(':leave', [
      style({top: 0, opacity: 1}),
      animate('300ms ease-in', style({top: '-100%', opacity: 0}))
    ], {optional: true}),
  ])
];
