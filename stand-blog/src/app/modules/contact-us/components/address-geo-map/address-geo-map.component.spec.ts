import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressGeoMapComponent } from './address-geo-map.component';

describe('AddressGeoMapComponent', () => {
  let component: AddressGeoMapComponent;
  let fixture: ComponentFixture<AddressGeoMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressGeoMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressGeoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
