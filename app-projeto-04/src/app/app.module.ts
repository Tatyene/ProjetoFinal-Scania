import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ErroComponent } from './components/erro/erro.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { InscricoesComponent } from './components/inscricoes/inscricoes.component';
import { InscricoesListaComponent } from './components/inscricoes-lista/inscricoes-lista.component';
import { InscricaoNovaComponent } from './components/inscricao-nova/inscricao-nova.component';
import { FormsModule } from '@angular/forms';
import { ListaVagasComponent } from './components/lista-vagas/lista-vagas.component';
import { InfoVagaComponent } from './components/info-vaga/info-vaga.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SubListaPipe } from './pipes/sub-lista.pipe';
import { ExcluirInscricaoComponent } from './components/excluir-inscricao/excluir-inscricao.component';
import { RouterModule } from '@angular/router';
import { CandidatoComponent } from './components/candidato/candidato.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { AtualizarVagaComponent } from './components/atualizar-vaga/atualizar-vaga.component';
import { InserirVagaComponent } from './components/inserir-vaga/inserir-vaga.component';
import { RemoverVagaComponent } from './components/remover-vaga/remover-vaga.component';
import { MulheresComponent } from './components/mulheres/mulheres.component';
import { LinkedinComponent } from './components/linkedin/linkedin.component';
import { EntrevistaComponent } from './components/entrevista/entrevista.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ErroComponent,
    HomeComponent,
    FooterComponent,
    InscricoesComponent,
    InscricoesListaComponent,
    InscricaoNovaComponent,
    ListaVagasComponent,
    InfoVagaComponent,
    CandidatoComponent,
    EmpresaComponent,
    LoginComponent,
    SubListaPipe,
    ExcluirInscricaoComponent,
    AtualizarVagaComponent,
    InserirVagaComponent,
    RemoverVagaComponent,
    MulheresComponent,
    LinkedinComponent,
    EntrevistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
