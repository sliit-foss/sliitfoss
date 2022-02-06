import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FadeInAnimation } from './animations/fade-in.animation';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [FadeInAnimation],
})
export class AppComponent {
  title = 'sliitfoss';

  prepareRoute(outlet: RouterOutlet) {
    if (sessionStorage.getItem('routeChanged') === 'true') {
      sessionStorage.setItem('routeChanged', 'false');
      return outlet?.activatedRouteData?.['animation'];
    }
    return null;
  }
}
