import { Component, OnInit } from '@angular/core';
import { getPastEvents } from 'src/app/services/event.service';
import Event from '../../models/event.model';

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.css'],
})
export class PastEventsComponent implements OnInit {
  slides: Event[] = [];
  slidesIndex = 0;
  loading: Boolean = false;

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

  async ngOnInit() {
    this.loading = true;
    this.slides = await getPastEvents();
    this.loading = false;
  }

  previousEvents() {}
}
