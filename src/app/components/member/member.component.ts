import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getAllEvents } from 'src/app/services/event.service';
import { getWebinars } from 'src/app/services/webinar.service';
import Config from '../../../config/config';
import * as $ from 'jquery';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {
  eventCount: number = 0;
  reposCount: number = 0;
  webinarCount: number = 0;

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    getAllEvents().then((data) => {
      this.eventCount = data.length;
      this.loadCounters('events');
    });
    this.http.get(Config.GITHUB_API_ORG_REPO_URL).subscribe(
      (data: Array<Object>) => (this.reposCount = data.length),
      (err) => (this.reposCount = 30),
      () => this.loadCounters('repos')
    );
    getWebinars().then((data) => {
      this.webinarCount = data.length;
      this.loadCounters('webinars');
    });
  }

  loadCounters(type: String) {
    $(document).ready(function () {
      $(`.counter-${type}`).each(function () {
        $(this)
          .prop('Counter', 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 4000,
              easing: 'swing',
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
    });
  }
}
