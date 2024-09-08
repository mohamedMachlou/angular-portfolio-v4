import { Component, signal } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  showMenu = signal<boolean>(false);
  select = 'about';

  /// Switch Nav bar links
  switch(name: string) {
    this.select = name;
    this.showMenu.set(false);
    console.log(name);
  }

  /// Show  Menu
  toShowMenu() {
    this.showMenu.set(true);
    console.log(this.showMenu());
  }
  /// Hide  Menu
  toHideMenu() {
    this.showMenu.set(false);
    console.log(this.showMenu());
  }
}
