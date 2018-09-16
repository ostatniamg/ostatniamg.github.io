import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActiveComponent } from './card-active.component';

describe('CardActiveComponent', () => {
  let component: CardActiveComponent;
  let fixture: ComponentFixture<CardActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
