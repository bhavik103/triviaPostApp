import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPostPage } from './latest-post.page';

describe('LatestPostPage', () => {
  let component: LatestPostPage;
  let fixture: ComponentFixture<LatestPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestPostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
