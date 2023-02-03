import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarVagaECandidato } from 'src/app/interfaces/listar-vaga-ecandidato';
import { InscricoesService } from 'src/app/services/inscricoes.service';

@Component({
  selector: 'app-excluir-inscricao',
  templateUrl: './excluir-inscricao.component.html',
  styleUrls: ['./excluir-inscricao.component.css']
})
export class ExcluirInscricaoComponent implements OnInit{
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inscricaoService: InscricoesService
  ) {}

  inscricao!: ListarVagaECandidato;
  id!: string;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.inscricaoService.getInscricaoId(parseInt(this.id))
      .subscribe(res => this.inscricao = res);
  }

  fechar(): void {
    this.router.navigate(['/candidato']);
  }

  remover() : void {
    this.inscricaoService.deletarInscricao(parseInt(this.id))
      .subscribe(() => this.fechar());
  }
}
