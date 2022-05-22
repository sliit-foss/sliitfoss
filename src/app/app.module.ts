import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MemberComponent } from './components/member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { CodeOfConductComponent } from './components/code-of-conduct/code-of-conduct.component';
import { BallerinaComponent } from './components/special-events/2022-ballerina/2022-ballerina.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faCoffee, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
  faCloudscale,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { PastEventsComponent } from './components/past-events/past-events.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BlogComponent } from './components/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { BoardComponent } from './components/board/board.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LatestBlogPostsComponent } from './components/latest-blog-posts/latest-blog-posts.component';
import { EventsComponent } from './components/events/events.component';
import { MatCardModule } from '@angular/material/card';
import { PodcastsectionComponent } from './components/home/podcastsection/podcastsection.component';
import { WebinarsComponent } from './components/webinars/webinars.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Page404Component } from './components/page404/page404.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    MemberComponent,
    CodeOfConductComponent,
    PastEventsComponent,
    BlogComponent,
    BoardComponent,
    LatestBlogPostsComponent,
    EventsComponent,
    PodcastsectionComponent,
    WebinarsComponent,
    Page404Component,
    BallerinaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FontAwesomeModule,
    CarouselModule,
    HttpClientModule,
    MatPaginatorModule,
    MatCardModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(
      faCoffee,
      faHandsHelping,
      faCloudscale,
      faLinkedin,
      faFacebook,
      faInstagram,
      faTwitter,
      faYoutube,
    );
  }
}
