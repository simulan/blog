import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestOverviewComponent } from './latest-overview.component';

describe('LatestOverviewComponent', () => {
  let component: LatestOverviewComponent;
  let fixture: ComponentFixture<LatestOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
