import { Component, OnInit } from '@angular/core';
import * as EventsData from '../../../assets/data/webinars.json';

@Component({
  selector: 'app-webinars',
  templateUrl: './webinars.component.html',
  styleUrls: ['./webinars.component.css'],
})
export class WebinarsComponent implements OnInit {
  slides: any = [];

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 2,
      },
      825: {
        items: 3,
      },
      1100: {
        items: 4,
      },
    },
    nav: false,
  };

  ngOnInit() {
    this.slides = EventsData.webinars;
  }
}
