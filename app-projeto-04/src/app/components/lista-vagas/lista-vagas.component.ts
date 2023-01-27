import { Component, OnInit } from '@angular/core';
import { ResumoVaga } from 'src/app/interfaces/resumo-vaga';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-lista-vagas',
  templateUrl: './lista-vagas.component.html',
  styleUrls: ['./lista-vagas.component.css']
})
export class ListaVagasComponent implements OnInit{

  constructor(private vagasService: VagasService) {}

  ngOnInit(): void {
    
    this.vagasService.GetResumoVagas()
      .subscribe(res => this.vagas = res);
  }

  vagas: ResumoVaga[] = [];

}
