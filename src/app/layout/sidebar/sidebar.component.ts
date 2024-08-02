import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  showServices = false;
  @Output() CloseSidebar = new EventEmitter();

  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    this.CloseSideBar();
  }

  CloseSideBar() {
    this.CloseSidebar.emit();
  }
}
