import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreOnServiceComponent } from './more-on-service.component';

describe('MoreOnServiceComponent', () => {
  let component: MoreOnServiceComponent;
  let fixture: ComponentFixture<MoreOnServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreOnServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreOnServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
