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
    document.getElementById(name)?.scrollIntoView({
      behavior: 'smooth', // or 'auto'
      block: 'start', // or 'end', 'center', 'nearest'
      inline: 'nearest', // or 'start', 'center', 'end'
    });
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
