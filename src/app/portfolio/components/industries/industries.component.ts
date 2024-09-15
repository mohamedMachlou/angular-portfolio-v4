import { Component } from '@angular/core';

@Component({
  selector: 'industries',
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.css',
})
export class IndustriesComponent {
  /// Switch Method
  switch(name: string) {
    document.getElementById(name)?.scrollIntoView({
      behavior: 'smooth', // or 'auto'
      block: 'start', // or 'end', 'center', 'nearest'
      inline: 'nearest', // or 'start', 'center', 'end'
    });
  }
}
