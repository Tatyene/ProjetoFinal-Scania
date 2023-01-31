import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResumoVaga } from '../interfaces/resumo-vaga';
import { HttpClient } from '@angular/common/http'
import { TudoVaga } from '../interfaces/tudo-vaga';
import { CandidatoEmpresa } from '../interfaces/candidatoEmpresa';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  constructor(private http: HttpClient) { }
  vagasUrl: string = "http://localhost:5169/api/vagas/";

  //lista todas as vagas
  public getResumoVagas() : Observable<ResumoVaga[]> {
    return this.http.get<ResumoVaga[]>(this.vagasUrl)
  }

  //Busca uma vaga por id
  public mostrarVaga(id: number) : Observable<TudoVaga> {
    return this.http.get<TudoVaga>(this.vagasUrl + id)
  }

  //Trás uma lista de empresas
  public getEmpresa() : Observable<CandidatoEmpresa[]> {
    return this.http.get<CandidatoEmpresa[]>(this.vagasUrl + "empresa")
  }

  //Pega uma vaga
  public getVagas(id: number) : Observable<CandidatoEmpresa> {
    const url = `${this.vagasUrl}${id}`;
    console.log(this.http.get<CandidatoEmpresa>(url));
    return this.http.get<CandidatoEmpresa>(url)
  }

  //Pega a lista de vagas da empresa
  public getEmpresaVaga(idempresa: number) : Observable<CandidatoEmpresa[]> {
    return this.http.get<CandidatoEmpresa[]>(this.vagasUrl + "vagaempresa/" + idempresa)
  }
}
