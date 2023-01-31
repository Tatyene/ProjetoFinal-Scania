import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TudoVaga } from 'src/app/interfaces/tudo-vaga';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-info-vaga',
  templateUrl: './info-vaga.component.html',
  styleUrls: ['./info-vaga.component.css']
})
export class InfoVagaComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vagasService: VagasService) {}
  
  vaga!: TudoVaga;
  id!: string;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.vagasService.mostrarVaga(parseInt(this.id))
      .subscribe(res => this.vaga = res);
  }

  fechar() : void {
    this.router.navigate(['vagas']);
  }

}
