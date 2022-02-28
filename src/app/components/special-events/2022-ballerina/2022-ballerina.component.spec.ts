import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallerinaComponent } from './2022-ballerina.component';

describe('BallerinaComponent', () => {
  let component: BallerinaComponent;
  let fixture: ComponentFixture<BallerinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BallerinaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallerinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
