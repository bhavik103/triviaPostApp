import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargePostPage } from './large-post.page';

describe('LargePostPage', () => {
  let component: LargePostPage;
  let fixture: ComponentFixture<LargePostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargePostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargePostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
