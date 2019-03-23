import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeperatorComponent } from './seperator.component';

describe('SeperatorComponent', () => {
  let component: SeperatorComponent;
  let fixture: ComponentFixture<SeperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
