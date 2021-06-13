import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSteperComponent } from './event-steper.component';

describe('EventSteperComponent', () => {
  let component: EventSteperComponent;
  let fixture: ComponentFixture<EventSteperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSteperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSteperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
