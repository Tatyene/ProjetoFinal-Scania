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
