import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCompletedComponent } from './card-completed.component';

describe('CardCompletedComponent', () => {
  let component: CardCompletedComponent;
  let fixture: ComponentFixture<CardCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
