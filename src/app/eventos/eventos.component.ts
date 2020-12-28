import { Component, OnInit } from '@angular/core';
import { Evento } from '../models/evento';
import { EventosService } from '../service/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  title = 'Eventos Angulares';

  eventos: Evento[]

  constructor(private eventosServico: EventosService){ }

  ngOnInit(){
    this.getEventos();
  }

  getEventos(){
    this.eventosServico.getEventos().subscribe((eventos: Evento[]) => {
      this.eventos = eventos;
    })
  }

}
