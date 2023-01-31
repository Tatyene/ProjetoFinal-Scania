import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatosService } from 'src/app/services/candidatos.service';
import { CandidatoEmpresa } from 'src/app/interfaces/candidatoEmpresa';
import { ListarVagaECandidato } from 'src/app/interfaces/listar-vaga-ecandidato';
import { InscricoesService } from 'src/app/services/inscricoes.service';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit{

  constructor(
    private router: Router,
    private candidatosServices: CandidatosService,
    private inscricaoServices: InscricoesService
    ) {}

  candidatos!: CandidatoEmpresa[];
  candidato!: CandidatoEmpresa;
  inscricao!: ListarVagaECandidato[];

  ngOnInit(): void {
    this.listaCandidatos();
  }

  fechar(): void {
    this.router.navigate(['/home']);
  }

  listaCandidatos(): void {
    this.candidatosServices.getCandidatosApi()
      .subscribe(res => this.candidatos = res)
  }

  listarInscricoes(id: string): void {
    this.inscricaoServices.getCandidatoVaga(parseInt(id))
      .subscribe(res => this.inscricao = res)
  }
}
