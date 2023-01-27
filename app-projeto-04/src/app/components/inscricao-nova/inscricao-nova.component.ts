import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatoEmpresa } from 'src/app/interfaces/candidatoEmpresa';
import { InscricoesVagaVM } from 'src/app/interfaces/inscricoes-vaga-vm';
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
  }

  candidatos!: CandidatoEmpresa[];
  candidato!: CandidatoEmpresa;
  empresas!: CandidatoEmpresa[];
  empresa!: CandidatoEmpresa;
  vagas!: CandidatoEmpresa[];
  vaga!: CandidatoEmpresa;
  inscricao!: InscricoesVagaVM;

  
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

  incluir(inscricao: InscricoesVagaVM) : void {
    this.inscricaoService.PostInscricao(inscricao)
      .subscribe(() => this.router.navigate(['inscricoes']));
  }
}
