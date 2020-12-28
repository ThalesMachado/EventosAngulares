import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EdicaoEvento } from '../models/edicao-evento';
import { EdicaoEventoService } from '../service/edicao-evento.service';

@Component({
  selector: 'app-busca-por-data',
  templateUrl: './busca-por-data.component.html',
  styleUrls: ['./busca-por-data.component.css']
})

export class BuscaPorDataComponent implements OnInit {

  form: FormGroup

  dataInicio = new FormControl("")

  edicoes: EdicaoEvento[]

  constructor(
    fb: FormBuilder,
    private edicoesEventos: EdicaoEventoService
  ) { 
    this.form = fb.group({
      "dataInicio": this.dataInicio
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.getEdicoes(this.dataInicio.value)
  }

  getEdicoes(dataInicio: string){
    this.edicoesEventos.getEdicaoDataInicio(dataInicio).subscribe(
      (edicoes: EdicaoEvento[]) =>{
        this.edicoes = edicoes
      }
    )
  }

}
