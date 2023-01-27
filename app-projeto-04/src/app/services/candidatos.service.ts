import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidatoEmpresa } from '../interfaces/candidatoEmpresa';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  constructor(private http: HttpClient) { }
  candidatoUrl: string = "http://localhost:5169/api/candidatos/"
   

  //lista todos os candidatos
  public getCandidatosApi() : Observable<CandidatoEmpresa[]> {
    return this.http.get<CandidatoEmpresa[]>(this.candidatoUrl)
  }

  //Busca candidato por id
  public getCandidatoApi(id: number) : Observable<CandidatoEmpresa> {
    return this.http.get<CandidatoEmpresa>(this.candidatoUrl + id)
  }
}
