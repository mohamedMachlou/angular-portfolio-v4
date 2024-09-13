/* ////////////////////////////////////////////////////// */
/* /////////////////////////////////////////////////////////// */
/* ////// Portfolio Version 4 Created by Mohamed Machlou ///// */
/* /////////////////////////////////////////////////////////// */
/* /////////////////////////////////////////////////////////// */
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  interval = 160;
  yearsMax = 15;
  nbWebsiteMax = 200;
  nbClientsMax = 500;

  years = signal<number>(0);
  nbWebsites = signal<number>(0);
  nbClients = signal<number>(0);

  ngOnInit(): void {
    this.valuesAnimation();
  }
  //// Manage Values Animation
  valuesAnimation() {
    if (this.nbClients() < this.nbClientsMax) {
      setInterval(() => {
        if (this.years() < this.yearsMax) {
          this.years.set(this.years() + 1);
        }
        if (this.nbWebsites() < this.nbWebsiteMax) {
          this.nbWebsites.set(this.nbWebsites() + 10);
        }
        if (this.nbClients() < this.nbClientsMax) {
          this.nbClients.set(this.nbClients() + 25);
        }
      }, this.interval);
    }
  }
}
