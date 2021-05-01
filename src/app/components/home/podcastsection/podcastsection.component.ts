import { Component, OnInit } from '@angular/core';
declare let AOS: any;

@Component({
  selector: 'app-podcast-section',
  templateUrl: './podcastsection.component.html',
  styleUrls: ['./podcastsection.component.css'],
})
export class PodcastsectionComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
