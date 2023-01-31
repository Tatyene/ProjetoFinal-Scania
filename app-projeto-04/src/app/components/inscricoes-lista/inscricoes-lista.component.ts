import { Component, OnInit } from '@angular/core';
import { ListarVagaECandidato } from 'src/app/interfaces/listar-vaga-ecandidato';
import { InscricoesService } from 'src/app/services/inscricoes.service';

@Component({
  selector: 'app-inscricoes-lista',
  templateUrl: './inscricoes-lista.component.html',
  styleUrls: ['./inscricoes-lista.component.css']
})
export class InscricoesListaComponent implements OnInit{

  constructor(private inscricoesService: InscricoesService) {}
  ngOnInit(): void {
   // this.inscricoes = this.inscricoesService.GetInscricao();
    this.inscricoesService.getInscricao()
      .subscribe(res => this.inscricoes = res);
  }
  inscricoes: ListarVagaECandidato[] = [];
}
