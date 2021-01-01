import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastEventsComponent } from './past-events.component';

describe('PastEventsComponent', () => {
  let component: PastEventsComponent;
  let fixture: ComponentFixture<PastEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PastEventsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
