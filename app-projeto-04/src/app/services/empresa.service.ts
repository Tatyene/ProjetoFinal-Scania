import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../classes/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService{

  constructor(private http: HttpClient) { }

  empresaUrl: string = "http://localhost:5169/api/empresas";

  public getEmpresas() : Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.empresaUrl);
  }

}
