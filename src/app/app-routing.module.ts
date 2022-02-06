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
  { path: '', component: HomeComponent, data: { animation: 'Home' } },
  { path: 'about', component: AboutComponent, data: { animation: 'About' } },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'Contact' },
  },
  {
    path: 'code-conduct',
    component: CodeOfConductComponent,
    data: { animation: 'CodeConduct' },
  },
  { path: 'blog', component: BlogComponent, data: { animation: 'Blog' } },
  { path: 'board', component: BoardComponent, data: { animation: 'Board' } },
  { path: 'events', component: EventsComponent, data: { animation: 'Events' } },
  { path: '404-page', component: Page404Component, data: { animation: '404' } },
  { path: '**', component: Page404Component, data: { animation: '404' } },
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
