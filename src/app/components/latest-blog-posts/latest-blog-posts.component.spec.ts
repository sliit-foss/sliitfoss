import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBlogPostsComponent } from './latest-blog-posts.component';

describe('LatestBlogPostsComponent', () => {
  let component: LatestBlogPostsComponent;
  let fixture: ComponentFixture<LatestBlogPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestBlogPostsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestBlogPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
