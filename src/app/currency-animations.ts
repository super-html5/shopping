import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const flyInOut = [
  trigger('flyInOut', [
    state('in', style({transform: 'translateY(0)'})),
    transition('void => *', [
      style({transform: 'translateY(100%)'}),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({transform: 'translateY(100%)'}))
    ])
  ])
];
