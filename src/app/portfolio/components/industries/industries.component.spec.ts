import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiSolComponent } from './industries.component';

describe('DigiSolComponent', () => {
  let component: DigiSolComponent;
  let fixture: ComponentFixture<DigiSolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigiSolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DigiSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
