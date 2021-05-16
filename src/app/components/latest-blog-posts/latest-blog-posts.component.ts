import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Config from '../../../config/config';

@Component({
  selector: 'app-latest-blog-posts',
  templateUrl: './latest-blog-posts.component.html',
  styleUrls: ['./latest-blog-posts.component.css'],
})
export class LatestBlogPostsComponent implements OnInit {
  blogPosts: [];

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 2,
      },
      825: {
        items: 3,
      },
      1100: {
        items: 4,
      },
    },
    nav: false,
  };

  constructor(private http: HttpClient) {
    this.getBlogPosts()
      .forEach((e) => {
        this.blogPosts = e['items'];
      })
      .then()
      .catch(() => {
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
