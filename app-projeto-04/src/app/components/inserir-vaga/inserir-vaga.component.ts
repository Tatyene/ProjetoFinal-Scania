import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/classes/empresa';
import { Vagas } from 'src/app/classes/vagas';
import { Visualizacao } from 'src/app/classes/vizualizacao';
import { EmpresaService } from 'src/app/services/empresa.service';
import { EnumeradosService } from 'src/app/services/enumerados.service';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-inserir-vaga',
  templateUrl: './inserir-vaga.component.html',
  styleUrls: ['./inserir-vaga.component.css']
})
export class InserirVagaComponent implements OnInit{
  
  constructor(
    private router: Router,
    private vagasService: VagasService,
    private enumService: EnumeradosService,
    private empresaService: EmpresaService) {}

  vaga!: Vagas;
  turnos!: Visualizacao[];
  escolaridades!: Visualizacao[];
  modalidades!: Visualizacao[];
  empresas!: Empresa[];
  
  ngOnInit(): void {
    this.vaga = new Vagas();
    this.listarEmpresas();
    this.listaEscolaridades();
    this.listaModalidades();
    this.listaTurnos();
  }

  fechar(): void {
    this.router.navigate(['/home']);
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

  incluir(vaga: Vagas) : void {
    this.vagasService.postVaga(vaga)
      .subscribe(() => this.router.navigate(['/vagas']));
  }
}
