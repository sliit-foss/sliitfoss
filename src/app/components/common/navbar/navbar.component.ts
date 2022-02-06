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

    this.refreshNavLinks();
    $(window).on('resize', () => {
      this.refreshNavLinks();
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

  refreshNavLinks() {
    const mediaQuery = window.matchMedia('(max-width: 992px)');
    const navElements = document.querySelectorAll('.nav-link');

    navElements.forEach((element) => {
      if (mediaQuery.matches) {
        element.setAttribute('data-bs-toggle', 'collapse');
        element.setAttribute('data-bs-target', '#navbarNavDropdown');
      } else {
        element.removeAttribute('data-bs-toggle');
        element.removeAttribute('data-bs-target');
      }
    });
  }

  onRouteChange() {
    sessionStorage.setItem('routeChanged', 'true');
  }
}
