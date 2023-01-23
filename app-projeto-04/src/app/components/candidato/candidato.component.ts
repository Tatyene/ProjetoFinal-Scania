import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit{

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
