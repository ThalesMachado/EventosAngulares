import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicoesEventosComponent } from './edicoes-eventos.component';

describe('EdicoesEventosComponent', () => {
  let component: EdicoesEventosComponent;
  let fixture: ComponentFixture<EdicoesEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicoesEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicoesEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
