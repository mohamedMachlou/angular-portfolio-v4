/* ////////////////////////////////////////////////////// */
/* /////////////////////////////////////////////////////////// */
/* ////// Portfolio Version 4 Created by Mohamed Machlou ///// */
/* /////////////////////////////////////////////////////////// */
/* /////////////////////////////////////////////////////////// */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

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

  public submit() {
    console.log(this.form.value);
    // console.log(f.value);
    // (this.contact.name = f.value.fullname),
    //   (this.contact.email = f.value.email),
    //   (this.contact.message = f.value.message),

    console.log(this.form.value);

    emailjs
      .send(
        'service_o70brhc',
        'template_f49n9n8',
        this.form.value,
        '7ALyQd9YWgjeyilwM'
      ) // Replace with your EmailJS service ID, template ID, and public key
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('SUCCESS!', result.status, result.text);
        },
        (error: EmailJSResponseStatus) => {
          console.log('FAILED...', error.status, error.text);
        }
      );
  }

  //// Start Social Media
  tofacebook() {
    window.open('https://www.facebook.com/machlouservices/', '_blank');
  }
  toinstagram() {
    window.open('https://www.instagram.com/machlou_services/', '_blank');
  }
  toyoutube() {
    window.open('https://www.youtube.com/@MoroccoWebDeveloper/', '_blank');
  }
  tolinkedin() {
    window.open('https://www.linkedin.com/in/machloumohamed/', '_blank');
  }
  totiktok() {
    window.open('https://www.tiktok.com/@machlouservices/', '_blank');
  }
  //// End Social Media
}
