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
  memberCount: number = 0;
  reposCount: number = 0;
  webinarCount: number = 0;
  repoCountLoaded: boolean = false;

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    getAllEvents().then((data) => {
      this.eventCount = data.length;
      this.loadCounters('events');
    });
    this.http
      .get(`${Config.DISCORD_BACKEND_SERVER_URL}/member/count`)
      .subscribe(
        (data: any) => (this.memberCount = data.data),
        (err) => (this.memberCount = 119),
        () => this.loadCounters('members')
      );
    this.loadRepoCount(1);
    getWebinars().then((data) => {
      this.webinarCount = data.length;
      this.loadCounters('webinars');
    });
    this.initCardListeners();
  }

  loadRepoCount(page: number) {
    this.http.get(`${Config.GITHUB_API_ORG_REPO_URL}?page=${page}`).subscribe(
      (data: Array<Object>) => {
        if (data.length > 0) {
          this.reposCount += data.length;
          this.loadRepoCount(page + 1);
        } else {
          this.repoCountLoaded = true;
        }
      },
      (err) => (this.reposCount = 50),
      () => {
        if (this.repoCountLoaded) {
          this.loadCounters('repos');
        }
      }
    );
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

  initCardListeners() {
    const boxes = document.querySelectorAll('.counter-box');
    boxes.forEach((box) => {
      box.addEventListener('mouseenter', () => {
        document.querySelectorAll('.counter-box').forEach((b) => {
          b.classList.remove('colored');
        });
        box.classList.add('colored');
        this.toggleCardColors(0, true);
        Array.from(box.children).forEach((child: HTMLElement) => {
          child.style.setProperty('color', '#ffffff', 'important');
        });
      });
      box.addEventListener('mouseleave', () => {
        box.classList.remove('colored');
        document.querySelectorAll('.counter-box')[0].classList.add('colored');
        Array.from(box.children).forEach((child: HTMLElement) => {
          child.style.removeProperty('color');
        });
        this.toggleCardColors(0);
      });
    });
    if (localStorage.getItem('theme') === 'light') this.toggleCardColors(0);
  }
  toggleCardColors(index: number, remove: boolean = false) {
    const elements = Array.from(
      document.querySelectorAll('.counter-box')[index].children
    );
    if (!remove) {
      elements.forEach((child: HTMLElement) => {
        child.style.setProperty('color', '#ffffff', 'important');
      });
    } else {
      elements.forEach((child: HTMLElement) => {
        child.style.removeProperty('color');
      });
    }
  }
}
