import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InscricoesVagaVM } from 'src/app/interfaces/inscricoes-vaga-vm';
import { InscricaoVaga } from 'src/app/interfaces/InscricoesVaga';
import { ListarVagaECandidato } from 'src/app/interfaces/listar-vaga-ecandidato';
import { InscricaoService } from 'src/app/services/inscricao.service';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent implements OnInit{

  constructor(
    private router: Router,
    private inscricaoService: InscricaoService) {}

  ngOnInit(): void {
    this.inscricoes = {nomecandidato: '', titulo_vaga: '', nomeempresa: '', datainscricao: ''};
  }

  inscricoes!: ListarVagaECandidato

  fechar(): void {
    this.router.navigate(['inscricoes']);
  }

  incluir(inscricoes: InscricoesVagaVM) : void {
    this.inscricaoService.PostInscricao(inscricoes)
      .subscribe(() => this.router.navigate(['inscricoes']))
  }


}
