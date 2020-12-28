import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EdicaoEvento } from '../models/edicao-evento';
import { EdicaoEventoService } from '../service/edicao-evento.service';

@Component({
  selector: 'app-buscar-edicoes',
  templateUrl: './buscar-edicoes.component.html',
  styleUrls: ['./buscar-edicoes.component.css']
})
export class BuscarEdicoesComponent implements OnInit {

  title = 'Edições de Eventos'

  edicoes: EdicaoEvento[]

  tituloEvento: string

  constructor(
    private route: ActivatedRoute,
    private edicoesEventos: EdicaoEventoService
  ) { }

  ngOnInit(): void {
    const edicaoEventoId: Number = + this.route.snapshot.paramMap.get('eventoId');
    this.getEdicoes(edicaoEventoId)
    console.log(this.edicoes);
  }

  getEdicoes(eventoId: Number){
    this.edicoesEventos.getEdicoesEventoAPartirEvento(eventoId).subscribe(
      (edicoes: EdicaoEvento[]) =>{
        this.edicoes = edicoes
        this.tituloEvento = edicoes[0].evento.nome
      }
    )
  }

}
