import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/classes/usuario';
import { VagasService } from 'src/app/services/vagas.service';
import { CandidatoEmpresa } from 'src/app/interfaces/candidatoEmpresa';
import { ListarVagaECandidato } from 'src/app/interfaces/listar-vaga-ecandidato';
import { InscricoesService } from 'src/app/services/inscricoes.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit{

  constructor(
    private router: Router,
    private empresaServices: VagasService,
    private vagaServices: VagasService,
    private inscricaoServices: InscricoesService
    ){}

  ngOnInit(): void {
    this.listaEmpresas();
  }

  empresas!: CandidatoEmpresa[];
  empresa!: CandidatoEmpresa;
  vagas!: CandidatoEmpresa[];
  vagas2!: ListarVagaECandidato[];
  vaga!: CandidatoEmpresa;

  fechar(): void {
    this.router.navigate(['/home']);
  }
  
  listaEmpresas(): void {
    this.empresaServices.getEmpresa()
      .subscribe(res => this.empresas = res)
  }

  listaVagas(idempresa: string): void {
    this.vagaServices.getEmpresaVaga(parseInt(idempresa))
      .subscribe(res => this.vagas = res)
  }

  listarCandidatos(id: string): void {
    this.inscricaoServices.getVagaCandidato(parseInt(id))
      .subscribe(res => this.vagas2 = res)
  }

}
