import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPostPage } from './all-post.page';

describe('AllPostPage', () => {
  let component: AllPostPage;
  let fixture: ComponentFixture<AllPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
