import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameDatosComponent } from './frame-datos.component';

describe('FrameDatosComponent', () => {
  let component: FrameDatosComponent;
  let fixture: ComponentFixture<FrameDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
