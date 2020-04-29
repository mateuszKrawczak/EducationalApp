import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingUserViewComponent } from './ranking-user-view.component';

describe('RankingUserViewComponent', () => {
  let component: RankingUserViewComponent;
  let fixture: ComponentFixture<RankingUserViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingUserViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
