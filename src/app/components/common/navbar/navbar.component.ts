import { Component, OnInit, HostListener } from '@angular/core';
import { faIcons } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  toggleIcon: string;
  navbarLogo: string;

  constructor() {}

  ngOnInit(): void {
    window.setTimeout(() => {
      sessionStorage.setItem('renderRouteAnimation', 'true');
    }, 100);

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

      if ($(window).scrollTop() === 0) {
        document.getElementById('foss_logo').style.opacity = '0%';
      } else {
        document.getElementById('foss_logo').style.opacity = '100%';
      }
    });
    this.setTheme(localStorage.getItem('theme'));
    this.refreshNavLinks();
    this.refreshTogglerAlignment();
    $(window).on('resize', () => {
      this.refreshNavLinks();
      this.refreshTogglerAlignment();
    });
  }

  @HostListener('document:scroll')
  scrollFunction() {
    if ($(window).scrollTop() > 60) {
      $('#logo').fadeOut();
      document.getElementById('foss_logo').style.opacity = '100%';
      $('.navbar').addClass(['navbar-fixed', 'shadow']);
    } else {
      $('#logo').fadeIn();
      document.getElementById('foss_logo').style.opacity = '0%';
      $('.navbar').removeClass(['navbar-fixed', 'shadow']);
    }
  }

  refreshNavLinks() {
    const mediaQuery = window.matchMedia('(max-width: 991px)');
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

  refreshTogglerAlignment() {
    const mediaQuery = window.matchMedia('(max-width: 991px)');
    const row = document.querySelectorAll('.container-fluid')[0];
    if (mediaQuery.matches) {
      const elem = row.children[2];
      if (elem.classList.contains('navbar-container')) {
        elem.remove();
        row.children[0].after(elem);
      }
    } else {
      const elem = row.children[1];
      if (elem.classList.contains('navbar-container')) {
        elem.remove();
        row.appendChild(elem);
      }
    }
  }

  setTheme(theme: string) {
    const icon = document.getElementById('toggle-icon') as HTMLElement;
    if (theme === 'dark') {
      this.toggleIcon = 'sun';
      this.navbarLogo = '../../../../assets/img/logo-light.webp';
      icon.style.color = '#ffffff';
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      this.toggleIcon = 'moon';
      this.navbarLogo = '../../../../assets/img/logo-dark.webp';
      icon.style.color = '#212121';
      icon.style.transform = 'scaleX(-1)';
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute("data-theme", "light");
    }
  }

  toggleTheme() {
    console.log('toggle');
    if (localStorage.getItem('theme') === 'dark') {
      this.setTheme('light');
    } else {
      this.setTheme('dark');
    }
  }
}
