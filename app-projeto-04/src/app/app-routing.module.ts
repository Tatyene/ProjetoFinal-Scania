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
import { ExcluirInscricaoComponent } from './components/excluir-inscricao/excluir-inscricao.component';
import { InserirVagaComponent } from './components/inserir-vaga/inserir-vaga.component';
import { RemoverVagaComponent } from './components/remover-vaga/remover-vaga.component';
import { AtualizarVagaComponent } from './components/atualizar-vaga/atualizar-vaga.component';

const routes: Routes = [
  // { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "", component: HomeComponent},
  { path: "home", component: HomeComponent}, 
  { path: "inscricoes", component: InscricoesComponent},
  { path: "inscricoes/nova/:id", component: InscricaoNovaComponent},
  { path: "vaga/inserir", component: InserirVagaComponent},
  { path: "vaga/remover/:id", component: RemoverVagaComponent},
  { path: "vaga/atualizar/:id", component: AtualizarVagaComponent},
  { path: "vagas", component: ListaVagasComponent},
  { path: "vagas/vagainfo/:id", component: InfoVagaComponent},
  { path: "candidato", component: CandidatoComponent},
  { path: "candidato/remover/:id", component: ExcluirInscricaoComponent},
  { path: "empresa", component: EmpresaComponent},
  { path: "login", component: LoginComponent},
  { path: "**", component: ErroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
