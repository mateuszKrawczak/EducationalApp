import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLevelsComponent } from './category-levels.component';

describe('CategoryLevelsComponent', () => {
  let component: CategoryLevelsComponent;
  let fixture: ComponentFixture<CategoryLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
