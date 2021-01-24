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
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faCoffee, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
  faCloudscale,
} from '@fortawesome/free-brands-svg-icons';
import { PastEventsComponent } from './components/past-events/past-events.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BlogComponent } from './components/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { BoardComponent } from './components/board/board.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LatestBlogPostsComponent } from './components/latest-blog-posts/latest-blog-posts.component';
import { EventsComponent } from './components/events/events.component';

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
      faYoutube
    );
  }
}
