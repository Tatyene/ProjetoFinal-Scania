
import { InscricoesService } from 'src/app/services/inscricoes.service';
import { ListarVagaECandidato } from 'src/app/interfaces/listar-vaga-ecandidato';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit{

  constructor(private router: Router,
    private InscricoesService: InscricoesService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


//   ngOnInit(): void {
//     this.InscricoesService.GetCandidatoVaga(id:number)
//     .subscribe(res => this.candidatovaga = res);
// }

candidatovaga: ListarVagaECandidato[] = [];
   
  }
  
