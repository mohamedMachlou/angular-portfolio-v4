import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ContactComponent } from './components/contact/contact.component';
import { DigitSolComponent } from './components/digit-sol/digit-sol.component';

@NgModule({
  declarations: [
    NavBarComponent,
    AboutComponent,
    CertificatesComponent,
    IndustriesComponent,
    ContactComponent,
    DigitSolComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavBarComponent,
    AboutComponent,
    DigitSolComponent,
    CertificatesComponent,
    IndustriesComponent,
    ContactComponent,
  ],
})
export class PortfolioModule {}
