import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeDoComponent } from './we-do.component';

describe('WeDoComponent', () => {
  let component: WeDoComponent;
  let fixture: ComponentFixture<WeDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeDoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
