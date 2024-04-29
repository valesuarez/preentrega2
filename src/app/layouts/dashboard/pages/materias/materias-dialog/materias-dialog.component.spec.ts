import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasDialogComponent } from './materias-dialog.component';

describe('MateriasDialogComponent', () => {
  let component: MateriasDialogComponent;
  let fixture: ComponentFixture<MateriasDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MateriasDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MateriasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
