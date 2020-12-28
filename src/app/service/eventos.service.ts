import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from "../models/evento";

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private readonly URL = 'http://localhost:8080/v1/eventos'

  constructor(private http: HttpClient) { }

  getEventos(): Observable<any> {
    return this.http.get<Evento[]>(this.URL)
  }

}
