import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoComponentsComponent } from './evento-components.component';

describe('EventoComponentsComponent', () => {
  let component: EventoComponentsComponent;
  let fixture: ComponentFixture<EventoComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
