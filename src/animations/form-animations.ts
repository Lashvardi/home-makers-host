import { trigger, state, style, transition, animate, } from '@angular/animations';

export const fadeOutIn = trigger('fadeOutIn', [
  state('form', style({ opacity: 1 })),
  state('message', style({ opacity: 0 })),
  transition('form => message', [
    animate('500ms ease-out', style({ opacity: 0 })),
  ]),
  transition('message => form', [
    animate('500ms ease-in', style({ opacity: 1 })),
  ]),
]);

export const fadeIn = trigger('fadeIn', [
  state('void', style({ opacity: 0 })),
  state('in', style({ opacity: 1 })),
  transition('void => in', [animate('500ms ease-in')]),
]);
