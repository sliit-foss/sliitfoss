import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { CodeOfConductComponent } from './components/code-of-conduct/code-of-conduct.component';
import { BlogComponent } from './components/blog/blog.component';
import { BoardComponent } from './components/board/board.component';
import { EventsComponent } from './components/events/events.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'code-conduct', component: CodeOfConductComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'board', component: BoardComponent },
  { path: 'event', component: EventsComponent },
  { path: '404-page', component: Page404Component },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'corrected',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
