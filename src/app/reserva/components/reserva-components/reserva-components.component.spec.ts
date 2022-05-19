import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaComponentsComponent } from './reserva-components.component';

describe('ReservaComponentsComponent', () => {
  let component: ReservaComponentsComponent;
  let fixture: ComponentFixture<ReservaComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
