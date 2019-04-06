import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticTitleComponent } from './static-title.component';

describe('StaticTitleComponent', () => {
  let component: StaticTitleComponent;
  let fixture: ComponentFixture<StaticTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
