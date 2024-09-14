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
  options = [
    'Electrical',
    'HVAC',
    'Plumbing',
    'Roofing',
    'Garage Door',
    'Solar',
    'Other',
  ];
  form = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(40),
      Validators.pattern('[a-zA-Z ]+'),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(40),
      Validators.pattern('[a-zA-Z ]+'),
    ]),
    companyname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(40),
      Validators.pattern('[a-zA-Z ]+'),
    ]),
    option: new FormControl('', [Validators.required]),
    phonenumber: new FormControl('', [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(15),
      Validators.pattern('[0-9 ]+'),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40),
      Validators.pattern('[a-zA-Z0-9_.]+@[a-zA-Z]+.[a-zA-Z]+'),
    ]),
    state: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(35),
      Validators.pattern('[a-zA-Z]+'),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(1000),
      Validators.pattern('[a-zA-Z0-9_., ]+'),
    ]),
  });

  get firstname() {
    return this.form.get('firstname');
  }
  get lastname() {
    return this.form.get('lastname');
  }
  get companyname() {
    return this.form.get('companyname');
  }
  get option() {
    return this.form.get('option');
  }
  get phonenumber() {
    return this.form.get('phonenumber');
  }
  get email() {
    return this.form.get('email');
  }
  get state() {
    return this.form.get('state');
  }
  get message() {
    return this.form.get('message');
  }

  // submit method

  submit() {
    console.log(this.form.value);
  }
}
