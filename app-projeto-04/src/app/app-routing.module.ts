import { EmpresaComponent } from './components/empresa/empresa.component';
import { CandidatoComponent } from './components/candidato/candidato.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
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
  { path: "candidato", component: CandidatoComponent},
  { path: "empresa", component: EmpresaComponent},
  { path: "login", component: LoginComponent},
  { path: "**", component: ErroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
