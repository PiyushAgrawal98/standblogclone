import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleBannerComponent } from './module-banner.component';

describe('ModuleBannerComponent', () => {
  let component: ModuleBannerComponent;
  let fixture: ComponentFixture<ModuleBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
