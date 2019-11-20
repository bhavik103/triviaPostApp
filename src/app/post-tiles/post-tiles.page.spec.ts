import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTilesPage } from './post-tiles.page';

describe('PostTilesPage', () => {
  let component: PostTilesPage;
  let fixture: ComponentFixture<PostTilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTilesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
