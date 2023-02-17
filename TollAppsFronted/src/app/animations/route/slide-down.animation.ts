import {animate, group, query, style} from "@angular/animations";

export const slideDownAnimation = [
  style({position: 'relative'}),
  query(':enter, :leave', [
    style({
      position: 'fixed',
      height: '100%',
      width: '100%'
    })
  ]),
  group([
    query(':enter', [
      style({top: '-100%', opacity: 0}),
      animate('300ms ease-in', style({top: 0, opacity: 1}))
    ]),
    query(':leave', [
      style({bottom: 0, opacity: 1}),
      animate('300ms ease-in', style({bottom: '-100%', opacity: 0}))
    ]),
  ])
]
