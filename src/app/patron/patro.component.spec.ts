import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatroComponent } from './patro.component';

describe('PatroComponent', () => {
  let component: PatroComponent;
  let fixture: ComponentFixture<PatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
