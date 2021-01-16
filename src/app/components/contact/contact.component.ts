import { Component, OnInit } from '@angular/core';
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
  constructor() {}
  faAddressBook = faAddressBook;
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;

  ngOnInit(): void {}
}
