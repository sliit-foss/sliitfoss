import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import Config from '../../../config/config';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {
  reposCount: number;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCounters();

    const count = this.getGitHubRepositoryCount();
    console.log('Count : ', count);
  }

  getGitHubRepositoryCount() {
    return this.http.get(Config.GITHUB_API_ORG_REPO_URL);
  }

  loadCounters() {
    $(document).ready(function () {
      $('.counter').each(function () {
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
