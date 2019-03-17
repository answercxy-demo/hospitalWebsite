import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalEnvComponent } from './hospital-env.component';

describe('HospitalEnvComponent', () => {
  let component: HospitalEnvComponent;
  let fixture: ComponentFixture<HospitalEnvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalEnvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
