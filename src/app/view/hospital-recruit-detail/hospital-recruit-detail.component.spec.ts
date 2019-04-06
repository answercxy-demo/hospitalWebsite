import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalRecruitDetailComponent } from './hospital-recruit-detail.component';

describe('HospitalRecruitDetailComponent', () => {
  let component: HospitalRecruitDetailComponent;
  let fixture: ComponentFixture<HospitalRecruitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalRecruitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalRecruitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
