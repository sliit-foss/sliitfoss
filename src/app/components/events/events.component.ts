import { Component, OnInit } from '@angular/core';
import { getUpcomingEvents } from 'src/app/services/event.service';
import Event from '../../models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  constructor() {}

  upcomingEvents: Event[] = [];

  async ngOnInit() {
    this.upcomingEvents = await getUpcomingEvents();
  }
}
