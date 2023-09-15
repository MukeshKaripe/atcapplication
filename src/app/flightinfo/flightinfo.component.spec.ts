import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightinfoComponent } from './flightinfo.component';

describe('FlightinfoComponent', () => {
  let component: FlightinfoComponent;
  let fixture: ComponentFixture<FlightinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightinfoComponent]
    });
    fixture = TestBed.createComponent(FlightinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
