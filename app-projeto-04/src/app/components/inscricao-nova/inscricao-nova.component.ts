import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatoEmpresa } from 'src/app/interfaces/candidatoEmpresa';
import { InscricaoVaga } from 'src/app/interfaces/InscricoesVaga';
import { TudoVaga } from 'src/app/interfaces/tudo-vaga';
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
    private route: ActivatedRoute,
    private router: Router,
    private candidatosServices: CandidatosService,
    private vagaServices: VagasService,
    private inscricaoService: InscricoesService
    ){}

  id!: string;
  candidatos!: CandidatoEmpresa[];
  candidato!: CandidatoEmpresa;
  vaga!: TudoVaga;
  inscricao!: InscricaoVaga;


  ngOnInit(): void {
    this.listaCandidatos();
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.vagaServices.mostrarVaga(parseInt(this.id))
      .subscribe(res => this.vaga = res);
    this.inscricao = {idcandidato: 0, idvaga: Number(this.id)};
  }
  

  
  fechar(): void {
    this.router.navigate(['/inscricoes']);
  }
  listaCandidatos() : void {
    this.candidatosServices.getCandidatosApi()
      .subscribe(res => this.candidatos = res)
  }

  incluir(inscricao: InscricaoVaga) : void {
    this.inscricaoService.postInscricao(inscricao)
      .subscribe(() => this.router.navigate(['inscricoes']));
  }
}
