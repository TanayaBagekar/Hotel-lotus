import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingHotelFormComponent } from './booking-hotel-form.component';

describe('BookingHotelFormComponent', () => {
  let component: BookingHotelFormComponent;
  let fixture: ComponentFixture<BookingHotelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingHotelFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingHotelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
