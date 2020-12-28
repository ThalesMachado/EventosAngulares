import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaPorDataComponent } from './busca-por-data.component';

describe('BuscaPorDataComponent', () => {
  let component: BuscaPorDataComponent;
  let fixture: ComponentFixture<BuscaPorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaPorDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaPorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
