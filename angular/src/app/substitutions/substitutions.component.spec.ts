import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstitutionsComponent } from './substitutions.component';

describe('SubstitutionsComponent', () => {
  let component: SubstitutionsComponent;
  let fixture: ComponentFixture<SubstitutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstitutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
