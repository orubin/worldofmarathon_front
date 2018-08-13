import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationPageComponent } from './accommodation-page.component';

describe('AccommodationPageComponent', () => {
  let component: AccommodationPageComponent;
  let fixture: ComponentFixture<AccommodationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
