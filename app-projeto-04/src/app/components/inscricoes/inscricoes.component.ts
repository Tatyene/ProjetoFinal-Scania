import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscricoes',
  templateUrl: './inscricoes.component.html',
  styleUrls: ['./inscricoes.component.css']
})
export class InscricoesComponent {

  constructor(private router: Router) {}
  
  novaInscricao() : void {
    this.router.navigate(['inscricoes/nova']);
  }
  fechar(): void {
    this.router.navigate(['/home']);
  }
}
