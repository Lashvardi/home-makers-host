import { Component } from '@angular/core';
import { ICards } from '../interfaces/projects-cards.model';
import { ChangeServiceService } from '../Services/change-service.service';
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-section-apartament-cards',
  templateUrl: './section-apartament-cards.component.html',
  styleUrl: './section-apartament-cards.component.scss',
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(50px)' }),
            stagger(100, [
              animate(
                '500ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class SectionApartamentCardsComponent {
  //   sanam api  vimushvebt ase iyos
  imageUrl: string = '';

  constructor(private ChangeS: ChangeServiceService) {}

  ngOnInit() {
    this.ChangeS.imageChange$.subscribe((url) => {
      this.updateCards(url);
    });
  }

  updateCards(url: string) {
    this.cards = this.cards.map((card) => ({
      ...card,
      image: url,
    }));
  }

 

  cards: ICards[] = [
    {
      title: '308 west 97th street',
      num: 'Location',
      image:
        'https://s3-alpha-sig.figma.com/img/335c/e3b9/577a0f1eb887469394ff66c964e11723?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UrSryY4g303SGg3lfI1uxJG6r3~oUOI44z3CoHYisNAExXkmTxT2n45lfeQWClShruubmpygb5Q940OLBzmDynkYxafvzlrH1auaEcDl-kvG4yqNK6WZf41uzxTidD1TPYaoP9fCn6Jle0kwBQNCo8xZ4IPN1~8xoiq2F37-UbST7nJ6YbOQ6O~MLq3X-vSxBzLcG8Q8YIbmhj2q7jWzpLXYMVAX5pAres~R76Rw1IzTM3tMp46LhURNqXLJ0SSFO0s31VKyUclTFIt~L01fMxeWPKNoFSfEBFahBDpbwGioHcMa4KcBbdUX3sVzwiGOu-qc8IMJhi1swdlDnPnw1A__',
    },
    {
      title: '370 clearmont',
      num: 'Location',
      image:
        'https://s3-alpha-sig.figma.com/img/0e95/5d22/e5961cbb1db2169c024f60d6bc700122?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WxZNdOHFyHReFvU88FigXFZOnVrGD2P20gUL6RqMCaBrFkkqzbDtK93cMyyIgp38y7WFzEGbcmCEQXcrH6yvz4S4e8r6WOJVU3BlWYfJaVcsAQLpQNEkpXRZP2LIMaQJeOAUPW6Pb-nCMDnN3un2Q2-803i3QW05I2HTXLqGmiajQ9zxhXj4WXUlmV-Iuk7naigoeJ6B4RvGl8agdaPL3JGiXWBR79FlwN~DrkT2Ig9aLzrASCV9stNAGo~VCvE0b~e0oy4weoM6FHWQusLjGqO-PjzGLiPVE40bN2BFxFlTGJEe7~6orB5HNxwUuy~H91norWQHGkpYKhlTXuyUXg__',
    },
    {
      title: '308 west 97th street',
      num: 'Location',
      image:
        'https://s3-alpha-sig.figma.com/img/335c/e3b9/577a0f1eb887469394ff66c964e11723?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UrSryY4g303SGg3lfI1uxJG6r3~oUOI44z3CoHYisNAExXkmTxT2n45lfeQWClShruubmpygb5Q940OLBzmDynkYxafvzlrH1auaEcDl-kvG4yqNK6WZf41uzxTidD1TPYaoP9fCn6Jle0kwBQNCo8xZ4IPN1~8xoiq2F37-UbST7nJ6YbOQ6O~MLq3X-vSxBzLcG8Q8YIbmhj2q7jWzpLXYMVAX5pAres~R76Rw1IzTM3tMp46LhURNqXLJ0SSFO0s31VKyUclTFIt~L01fMxeWPKNoFSfEBFahBDpbwGioHcMa4KcBbdUX3sVzwiGOu-qc8IMJhi1swdlDnPnw1A__',
    },
    {
      title: '370 clearmont',
      num: 'Location',
      image:
        'https://s3-alpha-sig.figma.com/img/0e95/5d22/e5961cbb1db2169c024f60d6bc700122?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WxZNdOHFyHReFvU88FigXFZOnVrGD2P20gUL6RqMCaBrFkkqzbDtK93cMyyIgp38y7WFzEGbcmCEQXcrH6yvz4S4e8r6WOJVU3BlWYfJaVcsAQLpQNEkpXRZP2LIMaQJeOAUPW6Pb-nCMDnN3un2Q2-803i3QW05I2HTXLqGmiajQ9zxhXj4WXUlmV-Iuk7naigoeJ6B4RvGl8agdaPL3JGiXWBR79FlwN~DrkT2Ig9aLzrASCV9stNAGo~VCvE0b~e0oy4weoM6FHWQusLjGqO-PjzGLiPVE40bN2BFxFlTGJEe7~6orB5HNxwUuy~H91norWQHGkpYKhlTXuyUXg__',
    },
  ];
}
