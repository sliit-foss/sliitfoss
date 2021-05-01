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
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  ngOnInit() {
    this.slides = EventsData.webinars;
    
  }
}
