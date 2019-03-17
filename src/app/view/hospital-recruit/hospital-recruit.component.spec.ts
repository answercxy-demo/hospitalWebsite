import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalRecruitComponent } from './hospital-recruit.component';

describe('HospitalRecruitComponent', () => {
  let component: HospitalRecruitComponent;
  let fixture: ComponentFixture<HospitalRecruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalRecruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalRecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
