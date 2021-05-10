import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
          $('#top').fadeIn();
        } else {
          $('#top').fadeOut();
        }
      });

      $('#top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
      });
    });
  }

  @HostListener('document:scroll')
  scrollFunction() {
    if ($(window).scrollTop() > 60) {
      $('#logo').fadeOut();
      $('.navbar').addClass(['navbar-fixed', 'shadow']);
    } else {
      $('#logo').fadeIn();
      $('.navbar').removeClass(['navbar-fixed', 'shadow']);
    }
  }
}
