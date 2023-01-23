import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit{

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
