import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare let AOS: any;
import {
  faAddressBook,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

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
    AOS.init();
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  contact() {
    console.log(this.contactForm.value);
  }
}
