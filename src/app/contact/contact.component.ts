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

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(event: Event) {
    event.preventDefault();
    this.checkValidInput();
    this.checkValidMail();
    console.log(this.contactData);

    if (this.validName && this.validMail && this.validMessage) {
      this.sendMail();
    }
  }

  checkValidInput() {
    this.validName = this.contactData.name != '';
    this.validMail = this.contactData.email != '';
    this.validMessage = this.contactData.message != '';
  }

  checkValidMail() {
    const email = this.contactData.email;
    const validMailAdress = isEmail(email);

    this.validMail = validMailAdress || validMailAdress === undefined;
  }

  sendMail() {
/*     this.http.post(this.post.endPoint, this.post.body(this.contactData))
    .subscribe({
      next: (response) => {

        ngForm.resetForm();
      },

      error: (error) => {
        console.error(error);
      },
      complete: () => console.info('send post complete'),
    }); */
  }
}
