import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-events-ballerina',
  templateUrl: './2022-ballerina.component.html',
  styleUrls: ['./2022-ballerina.component.css'],
})
export class BallerinaComponent implements OnInit {
  eventTimestamp = 1646919000;
  days = 0;
  hours = 0;
  mins = 0;
  seconds = 0;

  async ngOnInit() {
    this.initCountdown();
  }

  initCountdown() {
    const timeDiff = 1646919000 - Date.now() / 1000;
    this.days = Math.floor(timeDiff / 86400);
    this.hours = Math.floor((timeDiff % 86400) / 3600);
    this.mins = Math.floor(((timeDiff % 86400) % 3600) / 60);
    this.seconds = Math.floor(((timeDiff % 86400) % 3600) % 60);
    setTimeout(() => {
      this.initCountdown();
    }, 1000);
  }
}
