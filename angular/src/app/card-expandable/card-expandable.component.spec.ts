import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExpandableComponent } from './card-expandable.component';

describe('CardExpandableComponent', () => {
  let component: CardExpandableComponent;
  let fixture: ComponentFixture<CardExpandableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardExpandableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExpandableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
