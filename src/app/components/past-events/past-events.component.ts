import { Component, OnInit } from '@angular/core';
import * as EventsData from '../../../assets/data/events.json';

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.css'],
})
export class PastEventsComponent implements OnInit {
  slides: any = [];
  SlideOptions = {
    items: 1,
    dots: true,
    nav: true,
    autoplay: true,
    margin: 10,
    loop: true,
    smartSpeed: 1000,
  };

  ngOnInit() {
    this.slides = EventsData.events;
  }
}
