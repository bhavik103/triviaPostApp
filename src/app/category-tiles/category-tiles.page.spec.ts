import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTilesPage } from './category-tiles.page';

describe('CategoryTilesPage', () => {
  let component: CategoryTilesPage;
  let fixture: ComponentFixture<CategoryTilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTilesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
