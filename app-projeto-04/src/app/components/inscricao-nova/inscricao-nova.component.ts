import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatoEmpresa } from 'src/app/interfaces/candidatoEmpresa';
import { InscricaoVaga } from 'src/app/interfaces/InscricoesVaga';
import { CandidatosService } from 'src/app/services/candidatos.service';
import { InscricoesService } from 'src/app/services/inscricoes.service';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-inscricao-nova',
  templateUrl: './inscricao-nova.component.html',
  styleUrls: ['./inscricao-nova.component.css']
})
export class InscricaoNovaComponent implements OnInit{

  constructor(
    private router: Router,
    private candidatosServices: CandidatosService,
    private empresaServices: VagasService,
    private vagaServices: VagasService,
    private inscricaoService: InscricoesService
    ){}

  ngOnInit(): void {
    this.listaCandidatos();
    this.listaEmpresas();
    this.inscricao = {idcandidato: 0, idvaga: 0};
  }

  candidatos!: CandidatoEmpresa[];
  candidato!: CandidatoEmpresa;
  empresas!: CandidatoEmpresa[];
  empresa!: CandidatoEmpresa;
  vagas!: CandidatoEmpresa[];
  vaga!: CandidatoEmpresa;
  inscricao!: InscricaoVaga;

  
  fechar(): void {
    this.router.navigate(['/inscricoes']);
  }
  listaCandidatos() : void {
    this.candidatosServices.getCandidatosApi().subscribe(res => this.candidatos = res)
  }
  listaEmpresas(): void {
    this.empresaServices.GetEmpresa().subscribe(res => this.empresas = res)
  }
  listaVagas(idempresa: string): void {
    this.vagaServices.GetEmpresaVaga(parseInt(idempresa))
      .subscribe(res => this.vagas = res)
  }

  incluir(inscricao: InscricaoVaga) : void {
    this.inscricaoService.PostInscricao(inscricao)
      .subscribe(() => this.router.navigate(['inscricoes']));
  }
}
