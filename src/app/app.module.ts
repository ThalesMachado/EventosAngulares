import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EdicoesEventosComponent } from './edicoes-eventos/edicoes-eventos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscarEdicoesComponent } from './buscar-edicoes/buscar-edicoes.component';
import { EventosComponent } from './eventos/eventos.component';
import { BuscaPorDataComponent } from './busca-por-data/busca-por-data.component';

@NgModule({
  declarations: [
    AppComponent,
    EdicoesEventosComponent,
    BuscarEdicoesComponent,
    EventosComponent,
    BuscaPorDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
