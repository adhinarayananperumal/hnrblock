import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTimingsComponent } from './flight-timings.component';

describe('FlightTimingsComponent', () => {
  let component: FlightTimingsComponent;
  let fixture: ComponentFixture<FlightTimingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightTimingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
