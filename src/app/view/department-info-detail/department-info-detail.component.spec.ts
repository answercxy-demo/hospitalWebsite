import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentInfoDetailComponent } from './department-info-detail.component';

describe('DepartmentInfoDetailComponent', () => {
  let component: DepartmentInfoDetailComponent;
  let fixture: ComponentFixture<DepartmentInfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentInfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
