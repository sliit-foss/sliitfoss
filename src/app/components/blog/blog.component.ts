import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Config from '../../../config/config';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  totalLength: any;
  page = 1;
  blogPost: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    try {
      this.getCards().subscribe((results) => {
        this.blogPost = results['items'];
        this.totalLength = results['items'].length;
        //console.log(this.blogPost);
        //console.log(this.totalLength);
      });
    } catch (e) {}
  }

  getCards() {
    return this.http.get(Config.BLOG_URL);
  }

  getDaysCount(date) {
    return date.split(' ', 1);
  }
}
