import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'digit-sol',
  templateUrl: './digit-sol.component.html',
  styleUrl: './digit-sol.component.css',
})
export class DigitSolComponent implements OnInit {
  //// Manage Services Animation Variables
  cercleNb = signal<number>(1);
  serviceInterval = 1000;

  ngOnInit(): void {
    this.servicesAnim();
  }

  //// Manage Services Animation Variables
  servicesAnim() {
    setInterval(() => {
      if (this.cercleNb() <= 5) {
        this.cercleNb.set(this.cercleNb() + 1);
      }
      if (this.cercleNb() == 6) {
        this.cercleNb.set(1);
      }
    }, this.serviceInterval);
  }
}
