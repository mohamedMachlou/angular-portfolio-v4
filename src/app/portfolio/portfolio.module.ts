import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [NavBarComponent, AboutComponent],
  imports: [CommonModule],
  exports: [NavBarComponent, AboutComponent],
})
export class PortfolioModule {}
