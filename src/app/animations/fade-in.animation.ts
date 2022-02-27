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
      ':enter',
      [
        style({
          opacity: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          background: '#fff',
          height: '100vh',
          'z-index': 10,
        }),
      ],
      { optional: true }
    ),

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
