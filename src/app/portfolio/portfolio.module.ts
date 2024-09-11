import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { DigiSolComponent } from './components/digi-sol/digi-sol.component';

@NgModule({
  declarations: [
    NavBarComponent,
    AboutComponent,
    CertificatesComponent,
    DigiSolComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavBarComponent,
    AboutComponent,
    CertificatesComponent,
    DigiSolComponent,
  ],
})
export class PortfolioModule {}
