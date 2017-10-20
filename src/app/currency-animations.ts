import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

// 动画时间线
const time = '300ms';
const styles = {
  ease: time + ' ease ',
  linear: time + ' linear ',
  easeIn: time + ' ease-in',
  easeOut: time + ' ease-out',
  stepStart: time + ' step-start',
  stepEnd: time + ' step-end',
  easeInOut: time + ' ease-in-out',
  faseOutSlowIn: time + ' cubic-bezier(0.4, 0, 0.2, 1)',
  inOutBack: time + ' cubic-bezier(0.68, -0.55, 0.27, 1.55)',
  inOutCubic: time + ' cubic-bezier(0.65, 0.05, 0.36, 1)',
  inOutQuadratic: time + ' cubic-bezier(0.46, 0.03, 0.52, 0.96)',
  inOutSine: time + ' cubic-bezier(0.45, 0.05, 0.55, 0.95)'
};

// 动画配置
const opts = {
  fadeIn: [
    style({opacity: 0}),
    animate(styles.inOutBack, style({opacity: 1})),
  ],
  fadeOut: [
    style({opacity: 1}),
    animate(styles.inOutBack, style({opacity: 0}))
  ],
  shrink: [
    style({height: '*'}),
    animate(styles.inOutBack, style({height: 0}))
  ],
  stretch: [
    style({height: '0'}),
    animate(styles.inOutBack, style({height: '*'}))
  ],
  flyIn: [
    style({transform: 'translateX(-100%)'}),
    animate(styles.inOutBack, style({transform: '*'}))
  ],
  flyOut: [
    style({transform: '*'}),
    animate(styles.inOutBack, style({transform: 'translateX(-100%)'}))
  ],
  zoomIn: [
    style({transform: 'scale(.5)'}),
    animate(styles.inOutBack, style({transform: '*'}))
  ],
  zoomOut: [
    style({transform: '*'}),
    animate(styles.inOutBack, style({transform: 'scale(.5)'}))
  ]
};

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


// 导出动画
export const fadeIn = [trigger('fadeIn', [transition('void => *', opts.fadeIn)])];
export const fadeOut = [trigger('fadeOut', [transition('* => void', opts.fadeOut)])];
export const stretch = [trigger('stretch', [transition('void => *', opts.stretch)])];
export const shrink = [trigger('shrink', [transition('* => void', opts.shrink)])];
export const zoomIn = [trigger('zoomIn', [transition('void => *', opts.zoomIn)])];
export const zoomOut = [trigger('zoomOut', [transition('* => void', opts.zoomOut)])];



