import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardikComponent } from './hardik.component';

describe('HardikComponent', () => {
  let component: HardikComponent;
  let fixture: ComponentFixture<HardikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
