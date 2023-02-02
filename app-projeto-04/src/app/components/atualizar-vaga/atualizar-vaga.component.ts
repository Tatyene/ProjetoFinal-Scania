import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/classes/empresa';
import { Vagas } from 'src/app/classes/vagas';
import { Visualizacao } from 'src/app/classes/vizualizacao';
import { EmpresaService } from 'src/app/services/empresa.service';
import { EnumeradosService } from 'src/app/services/enumerados.service';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-atualizar-vaga',
  templateUrl: './atualizar-vaga.component.html',
  styleUrls: ['./atualizar-vaga.component.css']
})
export class AtualizarVagaComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vagasService: VagasService,
    private enumService: EnumeradosService,
    private empresaService: EmpresaService) {}
  
  vaga!: Vagas;
  id!: string;
  turnos!: Visualizacao[];
  escolaridades!: Visualizacao[];
  modalidades!: Visualizacao[];
  empresas!: Empresa[];

    ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.vagasService.getVagaIdApi(parseInt(this.id))
      .subscribe(res => this.vaga = res);
    this.listarEmpresas();
    this.listaEscolaridades();
    this.listaModalidades();
    this.listaTurnos();
  }

  
  listarEmpresas() : void {
    this.empresaService.getEmpresas()
      .subscribe(res => this.empresas = res);
  }
  listaTurnos() : void {
    this.enumService.getTurnos()
      .subscribe(res => this.turnos = res);
  }
  listaEscolaridades() : void {
    this.enumService.getEscolaridades()
      .subscribe(res => this.escolaridades = res);
  }
  listaModalidades() : void {
    this.enumService.getModalidades()
      .subscribe(res => this.modalidades = res);
  }
  alterar(vaga: Vagas) : void {
    this.vagasService.alterarVaga(vaga, parseInt(this.id))
      .subscribe(() => this.fechar());
  }
  fechar() : void {
    this.router.navigate(['vagas']);
  }

}