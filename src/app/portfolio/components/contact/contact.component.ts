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
      Validators.pattern('[a-zA-Z]+'),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(40),
      Validators.pattern('[a-zA-Z]+'),
    ]),
  });

  get firstname() {
    return this.form.get('firstname');
  }
  get lastname() {
    return this.form.get('lastname');
  }

  // submit method

  submit() {
    console.log(this.firstname?.errors?.['minlength']);
  }
}
