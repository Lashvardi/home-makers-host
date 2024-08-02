import { Component, OnInit } from '@angular/core';
import { ChangeServiceService } from '../../features/portfolio/Services/change-service.service';
import { ICards } from '../../features/portfolio/interfaces/projects-cards.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-cards',
  templateUrl: './portfolio-cards.component.html',
  styleUrls: ['./portfolio-cards.component.scss'],
})
export class PortfolioCardsComponent implements OnInit {
  isLoading = true;
  constructor(
    private ChangeS: ChangeServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  activeCard: ICards | null = null;

  ngOnInit(): void {
    // skeleton-ების გამოსაჩენად დროებით ასე იყოს
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    /////////////////////////////////////////////
    this.route.params.subscribe((params) => {
      const category = params['category'];
      if (category) {
        this.activeCard =
          this.cards.find((card) => card.num === category) || null;
      }
    });
  }

  Filter(card: ICards): void {
    this.activeCard = this.activeCard === card ? null : card;
  }

  onImage(imageUrl: string, category: string): void {
    if (this.router.url === '/') {
      this.router.navigate(['/portfolio', category]);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      setTimeout(() => {
        this.ChangeS.changeImage(imageUrl);
      }, 200);
    } else {
      this.ChangeS.changeImage(imageUrl);
    }
  }

  cards: ICards[] = [
    {
      title: 'APARTMENT RENOVATION',
      num: '01',
      image:
        'https://s3-alpha-sig.figma.com/img/a41a/6645/2694b3ef9c24b1fb582109ce031e37b8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VvKMpSFPwo2cDD113yGptWHDy~~etW1ZLHZdqTVYPjovbCail7rEkXIIeaYQc-FcUsWsRuts6mH~5L34tmTaS8-n17-QAb6Myq32ODqK1~FQwPjXgP8fbgWLmJXRkJZrFgoo2GRcxeWs0GRR9bFyNy3TkhqHJnmnRsH7p9wribcLwm~2uZMXhYYbqdFL4Q6pVnx5IFS7SD7ouvIIEzx7O-MVDgyc~vYRciRZRNdubKCg7DgU0WoCtTRFufV6aFcVeMYRU~sMvCl2nva~TgTvZDTgfKa~-A4a6YyiM~9ktg3zoEEtcA~6wDnb7NBFbiM8hA03FKGNosg3DsMxT5C27g__',
    },
    {
      title: 'COMMERCIAL RENOVATION',
      num: '02',
      image:
        'https://s3-alpha-sig.figma.com/img/4736/5e37/b0512ab7befeb19e590a647c81d399ff?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JAGv8gESsou3MI5duAPIct-oPnSmafVG1xRnBOv4xwzj4j3u-rAB-Q3N3meZBKnzs6UlwW~PkMZdqSOejheNv72jYghz0pdsx0RBWDvqtvGmr2DmC9Pk4yFlO-Bjq8konN~6PBLZ72fwmzfN9vwwoAur7Pe5LB4AnUxrI99IlMsUWjSEVQLU19Bd5N0oa-uoH6NeruHnR8ht0-itzJaVOCzhmSK2P90Lud8RW7a3bzspjeLFC3LHZ0EqIIi4U8Jks4k8FmVDch0-3~SWuMpVtcKnOs9Slg4CmxwvQrPorCgmvI1mLfJ2tc75g7DAmntJapdoYff3BT6pdGdUCdrW5Q__',
    },
    {
      title: 'BATHROOM RENOVATION',
      num: '03',
      image:
        'https://s3-alpha-sig.figma.com/img/335c/e3b9/577a0f1eb887469394ff66c964e11723?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UrSryY4g303SGg3lfI1uxJG6r3~oUOI44z3CoHYisNAExXkmTxT2n45lfeQWClShruubmpygb5Q940OLBzmDynkYxafvzlrH1auaEcDl-kvG4yqNK6WZf41uzxTidD1TPYaoP9fCn6Jle0kwBQNCo8xZ4IPN1~8xoiq2F37-UbST7nJ6YbOQ6O~MLq3X-vSxBzLcG8Q8YIbmhj2q7jWzpLXYMVAX5pAres~R76Rw1IzTM3tMp46LhURNqXLJ0SSFO0s31VKyUclTFIt~L01fMxeWPKNoFSfEBFahBDpbwGioHcMa4KcBbdUX3sVzwiGOu-qc8IMJhi1swdlDnPnw1A__',
    },
    {
      title: 'KITCHEN RENOVATION',
      num: '04',
      image:
        'https://s3-alpha-sig.figma.com/img/0e95/5d22/e5961cbb1db2169c024f60d6bc700122?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WxZNdOHFyHReFvU88FigXFZOnVrGD2P20gUL6RqMCaBrFkkqzbDtK93cMyyIgp38y7WFzEGbcmCEQXcrH6yvz4S4e8r6WOJVU3BlWYfJaVcsAQLpQNEkpXRZP2LIMaQJeOAUPW6Pb-nCMDnN3un2Q2-803i3QW05I2HTXLqGmiajQ9zxhXj4WXUlmV-Iuk7naigoeJ6B4RvGl8agdaPL3JGiXWBR79FlwN~DrkT2Ig9aLzrASCV9stNAGo~VCvE0b~e0oy4weoM6FHWQusLjGqO-PjzGLiPVE40bN2BFxFlTGJEe7~6orB5HNxwUuy~H91norWQHGkpYKhlTXuyUXg__',
    },
  ];
}
