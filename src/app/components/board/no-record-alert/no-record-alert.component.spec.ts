import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRecordAlertComponent } from './no-record-alert.component';

describe('NoRecordAlertComponent', () => {
  let component: NoRecordAlertComponent;
  let fixture: ComponentFixture<NoRecordAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoRecordAlertComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRecordAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
