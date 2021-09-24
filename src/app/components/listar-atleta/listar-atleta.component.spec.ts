import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAtletaComponent } from './listar-atleta.component';

describe('ListarAtletaComponent', () => {
  let component: ListarAtletaComponent;
  let fixture: ComponentFixture<ListarAtletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAtletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAtletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
