import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesdeAlumnosComponent } from './detallesde-alumnos.component';

describe('DetallesdeAlumnosComponent', () => {
  let component: DetallesdeAlumnosComponent;
  let fixture: ComponentFixture<DetallesdeAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallesdeAlumnosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesdeAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
