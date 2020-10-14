import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoComponent } from './ceo.component';

describe('CeoComponent', () => {
  let component: CeoComponent;
  let fixture: ComponentFixture<CeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CeoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
