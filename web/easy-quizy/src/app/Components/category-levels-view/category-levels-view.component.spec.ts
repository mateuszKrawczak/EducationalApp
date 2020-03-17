import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLevelsViewComponent } from './category-levels-view.component';

describe('CategoryLevelsViewComponent', () => {
  let component: CategoryLevelsViewComponent;
  let fixture: ComponentFixture<CategoryLevelsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryLevelsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryLevelsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
