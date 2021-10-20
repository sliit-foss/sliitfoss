import { Component, OnInit } from '@angular/core';

type Event = {
  image: string;
  title: string;
  speaker: string;
  description: string;
  tags: string;
  registrationLink: string;
};

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  constructor() {}

  upcomingEvents: Event[] = [];

  ngOnInit(): void {}
}
