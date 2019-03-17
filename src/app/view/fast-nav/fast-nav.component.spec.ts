import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastNavComponent } from './fast-nav.component';

describe('FastNavComponent', () => {
  let component: FastNavComponent;
  let fixture: ComponentFixture<FastNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
