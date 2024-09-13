/* ////////////////////////////////////////////////////// */
/* /////////////////////////////////////////////////////////// */
/* ////// Portfolio Version 4 Created by Mohamed Machlou ///// */
/* /////////////////////////////////////////////////////////// */
/* /////////////////////////////////////////////////////////// */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  form = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(40),
      Validators.pattern(),
    ]),
  });
}
