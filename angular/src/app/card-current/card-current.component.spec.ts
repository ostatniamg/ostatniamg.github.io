import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCurrentComponent } from './card-current.component';

describe('CardCurrentComponent', () => {
  let component: CardCurrentComponent;
  let fixture: ComponentFixture<CardCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
