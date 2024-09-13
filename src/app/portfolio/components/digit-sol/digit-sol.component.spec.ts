import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitSolComponent } from './digit-sol.component';

describe('DigitSolComponent', () => {
  let component: DigitSolComponent;
  let fixture: ComponentFixture<DigitSolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitSolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
