import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  sidebarVisible = false;

  isScrollingDown = false;
  isScrollingUp = true;
  private scrollTimeout: any;
  private lastScrollTop = 0;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.NavbarBehaviour();
  }

  NavbarBehaviour() {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > this.lastScrollTop) {
      this.isScrollingDown = true;
      this.isScrollingUp = false;
    } else {
      this.isScrollingDown = false;
      this.isScrollingUp = true;
    }

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    this.scrollTimeout = setTimeout(() => {
      this.isScrollingDown = false;
      this.isScrollingUp = true;
    }, 500);
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  closeSideBar() {
    this.sidebarVisible = false;
  }
}
