import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscaPorDataComponent } from './busca-por-data/busca-por-data.component';
import { BuscarEdicoesComponent } from './buscar-edicoes/buscar-edicoes.component';
import { EdicoesEventosComponent } from './edicoes-eventos/edicoes-eventos.component';
import { EventosComponent } from './eventos/eventos.component';

const routes: Routes = [
  {path: 'edicoes-eventos', component: EdicoesEventosComponent},
  {path: 'busca-por-data', component: BuscaPorDataComponent},
  {path: 'buscar-edicoes/:eventoId', component: BuscarEdicoesComponent},
  {path: 'eventos', component: EventosComponent},
  {path: '', component: EventosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})

export class AppRoutingModule { }