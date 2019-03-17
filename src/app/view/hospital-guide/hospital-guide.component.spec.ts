import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalGuideComponent } from './hospital-guide.component';

describe('HospitalGuideComponent', () => {
  let component: HospitalGuideComponent;
  let fixture: ComponentFixture<HospitalGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
