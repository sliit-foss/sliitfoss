import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogPosts: [];

  constructor(private http: HttpClient) {
    // TODO: Something wrong here!!!
    this.getBlogPosts().forEach((e) => {
      this.blogPosts = e['items'];
    });
  }

  ngOnInit(): void {}

  getBlogPosts() {
    return this.http.get(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/sliit-foss'
    );
  }

  getDaysCount(date) {
    return date.split(' ', 1);
  }
}
