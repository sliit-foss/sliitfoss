import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastsectionComponent } from './podcastsection.component';

describe('PodcastsectionComponent', () => {
  let component: PodcastsectionComponent;
  let fixture: ComponentFixture<PodcastsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PodcastsectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
