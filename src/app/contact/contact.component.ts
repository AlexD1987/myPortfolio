import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { isEmail } from 'validator';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})


export class ContactComponent {
  validName: boolean | undefined;
  validMail: boolean | undefined;
  validMessage: boolean | undefined;
  completeMessage = false;

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.contactForm.controls.name.value != '') {
      this.validName = true;
    } else {
      this.validName = false;
    }

    if (this.contactForm.controls.email.value != '' && this.contactForm.controls.email.value != undefined) {
      this.checkValidMail();
    } else {
      this.validMail = false;
    }

    if (this.contactForm.controls.message.value != '') {
      this.validMessage = true;
    } else {
      this.validMessage = false;
    }

    if (this.validMail && this.validMessage && this.validName) {
      this.sendMessage();
    }
  }

  checkValidMail() {
    const email = this.contactForm.controls.email.value as string;
    const validMailAdress = isEmail(email);

    if (validMailAdress || validMailAdress === undefined) {
      this.validMail = true;
    } else {
      this.validMail = false;
    }
  }

  sendMessage() {
    this.contactData.name = this.contactForm.controls.name.value as string;
    this.contactData.email = this.contactForm.controls.email.value as string;
    this.contactData.message = this.contactForm.controls.message.value as string;
    console.log(this.contactData);
  }
}
