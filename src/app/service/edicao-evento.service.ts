import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EdicaoEvento } from '../models/edicao-evento';

@Injectable({
  providedIn: 'root'
})
export class EdicaoEventoService {

  private readonly url = 'http://localhost:8080/v1'

  constructor(private http: HttpClient) { }

  getEdicoesEventoAPartirEvento(eventoId: Number): Observable<any>{
    return this.http.get<EdicaoEvento[]>(this.url + '/evento/' + eventoId + '/edicoes')
  }

  getAllEdicoes(): Observable<any>{
    return this.http.get<EdicaoEvento[]>(this.url + '/edicaoevento/all')
  }

  getEdicaoDataInicio(dataInicio: string): Observable<any>{
    return this.http.get<EdicaoEvento[]>(this.url + '/buscaredicoesdata/?data=' + dataInicio)
  }

  
}
