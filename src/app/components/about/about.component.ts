import { Component, OnInit } from '@angular/core';
import {
  faCoffee,
  faFistRaised,
  faMagic,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
declare let AOS: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}
  faCoffee = faCoffee;
  faFistRaised = faFistRaised;
  faUsers = faUsers;
  faMagic = faMagic;
  ngOnInit(): void {
    AOS.init();
  }
}
