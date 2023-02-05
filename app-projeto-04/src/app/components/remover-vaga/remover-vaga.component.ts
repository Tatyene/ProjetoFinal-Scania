import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vagas } from 'src/app/classes/vagas';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-remover-vaga',
  templateUrl: './remover-vaga.component.html',
  styleUrls: ['./remover-vaga.component.css']
})
export class RemoverVagaComponent implements OnInit{
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vagaService: VagasService) {}

    vaga!: Vagas;
    id!: string;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.vagaService.getVagaIdApi(parseInt(this.id))
      .subscribe(res => this.vaga = res);
  }

  fechar() : void {
    this.router.navigate(['/vagas']);
  }
  remover() : void {
    this.vagaService.deletarVaga(parseInt(this.id))
      .subscribe(() => this.fechar());
  }

}
