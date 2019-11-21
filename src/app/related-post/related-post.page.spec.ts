import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedPostPage } from './related-post.page';

describe('RelatedPostPage', () => {
  let component: RelatedPostPage;
  let fixture: ComponentFixture<RelatedPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedPostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
