import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Config from '../../../config/config';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogPosts: [];

  constructor(private http: HttpClient) {
    this.getBlogPosts()
      .forEach((e) => {
        this.blogPosts = e['items'];
      })
      .then((r) => {})
      .catch((e) => {
        //  TODO: if couldn't load Blog posts
      });
  }

  ngOnInit(): void {}

  getBlogPosts() {
    return this.http.get(Config.BLOG_URL);
  }

  getDaysCount(date) {
    return date.split(' ', 1);
  }
}
