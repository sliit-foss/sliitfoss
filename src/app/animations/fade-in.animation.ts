import {
  animate,
  query,
  transition,
  trigger,
  style,
} from '@angular/animations';

export const FadeInAnimation = trigger('routeAnimations', [
  transition('* => *', [
    query(
      ':leave',
      [style({ opacity: 1 }), animate('0.1s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.1s', style({ opacity: 1 }))],
      { optional: true }
    ),
  ]),
]);
