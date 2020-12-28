import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEdicoesComponent } from './buscar-edicoes.component';

describe('BuscarEdicoesComponent', () => {
  let component: BuscarEdicoesComponent;
  let fixture: ComponentFixture<BuscarEdicoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarEdicoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarEdicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
