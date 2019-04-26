import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreOnSolutionComponent } from './more-on-solution.component';

describe('MoreOnSolutionComponent', () => {
  let component: MoreOnSolutionComponent;
  let fixture: ComponentFixture<MoreOnSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreOnSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreOnSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
