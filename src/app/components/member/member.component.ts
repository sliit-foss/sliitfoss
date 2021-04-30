import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    $(document).ready(function() {
      $('.counter').each(function () {
      $(this).prop('Counter',0).animate({
      Counter: $(this).text()
      }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
      $(this).text(Math.ceil(now));
      }
      });
      });

      });
  }


}
