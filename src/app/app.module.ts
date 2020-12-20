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
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

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
    WhatWeDoComponent,
    TestimonialsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faLinkedin, faFacebook, faInstagram, faTwitter, faYoutube);
  }
}
