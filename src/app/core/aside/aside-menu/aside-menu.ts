import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'aside-menu',
  imports: [],
  templateUrl: './aside-menu.html',
  styleUrl: './aside-menu.css'
})
export class AsideMenu {
  isDevlopped: boolean = false;

  @HostListener('click') onClick() {
    this.isDevlopped = !this.isDevlopped;
  }
}
