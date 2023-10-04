import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExponenteComponent } from './exponente.component';

describe('ExponenteComponent', () => {
  let component: ExponenteComponent;
  let fixture: ComponentFixture<ExponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExponenteComponent]
    });
    fixture = TestBed.createComponent(ExponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
