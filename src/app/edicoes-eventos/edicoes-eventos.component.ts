
import { Component, OnInit } from '@angular/core';
import { EdicaoEvento } from '../models/edicao-evento';
import { EdicaoEventoService } from '../service/edicao-evento.service';

@Component({
  selector: 'app-edicoes-eventos',
  templateUrl: './edicoes-eventos.component.html',
  styleUrls: ['./edicoes-eventos.component.css']
})
export class EdicoesEventosComponent implements OnInit {
  title = 'Edições de Eventos'

  edicoes: EdicaoEvento[]

  constructor(
    private edicaoEventoService: EdicaoEventoService
  ) { }

  ngOnInit(): void {
    this.getEdicoes()
  }

  getEdicoes(){
    this.edicaoEventoService.getAllEdicoes().subscribe(
      (edicoes: EdicaoEvento[]) => {
        this.edicoes = edicoes
      }
    )
  }

}
