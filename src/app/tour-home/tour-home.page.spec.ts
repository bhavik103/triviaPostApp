import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourHomePage } from './tour-home.page';

describe('TourHomePage', () => {
  let component: TourHomePage;
  let fixture: ComponentFixture<TourHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
