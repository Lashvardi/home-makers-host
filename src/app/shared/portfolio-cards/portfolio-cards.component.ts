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
        'https://s3-alpha-sig.figma.com/img/a41a/6645/2694b3ef9c24b1fb582109ce031e37b8?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lmCYdLLjVcw4G02oOt4Ufc4H2KedjEaEPBE0CFcgMel94f1O6SHYISjWqNsEiSwWUdgJ9UosdixtDEdYu~enWs-bOzGEPjI5vaSDTFQKBxXooCfYRCvkPBmj8UhCq0CNCnUUqXOFQDbN-t45WGuerxw7cN7JiHbzDXeO30b87agPTu4hQrqpgwU4wR3pBTmbd8KCZirdzkuQo9c5X0GiAkLentC0iH1E6lP8KaPk36VUlVzHLDlcedj6I0zF-WRlxucGlQIt8MaVgNHY4Heh6MSvniRUWCskmC2R401Fh6M9uSOdXG~RWuhve0RDnyFiKl50wS4pbeGqgIlwPGn8JQ__',
    },
    {
      title: 'COMMERCIAL RENOVATION',
      num: '02',
      image:
        'https://s3-alpha-sig.figma.com/img/4736/5e37/b0512ab7befeb19e590a647c81d399ff?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=klETUlRjyB31mhMLKdyIVBtqhuWNerpCF1ui3MODt43vOLtjvhwfFkEut5NexJmffiT4LV2LrJQFfQ6oyuY13c0IYEJWlZsgvspjHJGXn7lMf5a9I61vWId2iyRCwyfkXgLvaiYXqOt6gn42ZbEjlIPJ0lrEciSjvbzD7~V-Irw4q0cwmF-7djPpd7DrurW4rRf1oz8cIr6ZlULI-1Ka-mfS7vcFU-28RXn9-qvy-O9XDIjziVpYRRZa-70iKA7gi6ke0tvXYlXnsJxzKvCdipuQ5HbpQRGeL78DeBJBnPzsyG2OiET-sA83HpBRgM5~hdXoKwGWn5r8JZqXDj3qnQ__',
    },
    {
      title: 'BATHROOM RENOVATION',
      num: '03',
      image:
        'https://s3-alpha-sig.figma.com/img/335c/e3b9/577a0f1eb887469394ff66c964e11723?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ClYcxTEFGuiRe~R5wa0aMKtU9i-E9W368EWyTFriQSdfCij1zqonnXNESZYTklJlH9cJLmW0Ky44wVbttBpI-GZfZqEc~dLTKbljT704b21E3fY9JlH~fUd3eZZTZijoEee31C0E~EeagiYyMnJPCqRnklWwWlr1oeO6JHM26TUye7ysVvj0gr5Zmc6RJXLd9S9H0EFy7s~8T3MEG2m4VWxJmp2XDxUonOG9FUyWNW7wQauWTjy0RDpqEFst7m3qT-Q3sec52L7WRPewqSWN3Mr9rXikn81EF3rKrjUfTkBYsBTDx6AvT5g9xQBCAz0XdBmXwE8gsUfcIQ1xKlAxDg__',
    },
    {
      title: 'KITCHEN RENOVATION',
      num: '04',
      image:
        'https://s3-alpha-sig.figma.com/img/0e95/5d22/e5961cbb1db2169c024f60d6bc700122?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jhsZer74NUPtrh7zzTH-wOZKtTkcn8J2eVm6Pu-ZSOMEz1Msv7BP-c9BNSgKThY9Ndxo429FpNfesyWsAYSJtldSHWe0rL-SCeyv5diqcAVBKQXWYzJw3YGqzWpQG7M2a~FYQ5rlJXFZ~BR8cIz5t6NCeWcHzGegrZ7jdvuqGjHep9FDmiPw0j5TkmFNnExZNNZeV-iCuAOxYidhX0BjbxetN7R08-H~ocdeMMTL48K~5-4nmoqss1RgzffbFfjxZ-6QKY4VHe3N838ijxomMG650GMcKQ1pDz5BrdtJSh0mMGjtmuF-98wRrZyA-ovgMD-D8tQdXx90jnf5yI~aAg__',
    },
  ];
}
