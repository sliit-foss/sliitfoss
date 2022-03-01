import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FadeInAnimation } from './animations/fade-in.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [FadeInAnimation],
})
export class AppComponent implements OnInit {
  title = 'sliitfoss';

  ngOnInit(): void {
    window.onbeforeunload = () => {
      sessionStorage.setItem('renderRouteAnimation', 'false');
    };
  }

  prepareRoute(outlet: RouterOutlet) {
    if (sessionStorage.getItem('renderRouteAnimation') === 'true') {
      return outlet?.activatedRouteData?.['animation'];
    }
    return null;
  }
}
