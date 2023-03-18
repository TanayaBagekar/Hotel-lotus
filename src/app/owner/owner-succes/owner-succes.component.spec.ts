import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSuccesComponent } from './owner-succes.component';

describe('OwnerSuccesComponent', () => {
  let component: OwnerSuccesComponent;
  let fixture: ComponentFixture<OwnerSuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerSuccesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
