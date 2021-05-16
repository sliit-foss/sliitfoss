import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import {
  faAddressBook,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  faAddressBook = faAddressBook;
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  contact(e: Event) {
    emailjs
      .sendForm(
        environment.emailServiceId,
        environment.emailTemplateId,
        e.target as HTMLFormElement,
        environment.emailUserId
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('EmailJs Resp : ' + result.text);
          this.contactForm.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
