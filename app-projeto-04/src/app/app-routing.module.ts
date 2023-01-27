import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroComponent } from './components/erro/erro.component';
import { HomeComponent } from './components/home/home.component';
import { InfoVagaComponent } from './components/info-vaga/info-vaga.component';
import { InscricaoNovaComponent } from './components/inscricao-nova/inscricao-nova.component';
import { InscricoesComponent } from './components/inscricoes/inscricoes.component';
import { ListaVagasComponent } from './components/lista-vagas/lista-vagas.component';

const routes: Routes = [
  // { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "", component: HomeComponent},
  { path: "home", component: HomeComponent}, 
  { path: "inscricoes", component: InscricoesComponent},
  { path: "inscricoes/nova", component: InscricaoNovaComponent},
  { path: "vagas", component: ListaVagasComponent},
  { path: "vagas/vagainfo/:id", component: InfoVagaComponent},
  { path: "**", component: ErroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
