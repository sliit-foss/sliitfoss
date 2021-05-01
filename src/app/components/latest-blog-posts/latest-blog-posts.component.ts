import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Config from '../../../config/config';
declare let AOS: any;

@Component({
  selector: 'app-latest-blog-posts',
  templateUrl: './latest-blog-posts.component.html',
  styleUrls: ['./latest-blog-posts.component.css'],
})
export class LatestBlogPostsComponent implements OnInit {
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

  ngOnInit(): void {
    AOS.init();
  }

  getBlogPosts() {
    return this.http.get(Config.BLOG_URL);
  }

  getDaysCount(date) {
    return date.split(' ', 1);
  }
}
