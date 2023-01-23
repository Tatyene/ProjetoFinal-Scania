import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidatoEmpresa } from '../interfaces/candidatoEmpresa';
import { ResumoVaga } from '../interfaces/resumo-vaga';
import { TudoVaga } from '../interfaces/tudo-vaga';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  constructor(private http: HttpClient) { }

  vagasUrl: string = "http://localhost:5169/api/vagas/";

  //lista todas as vagas
  public GetResumoVagas() : Observable<ResumoVaga[]> {
    return this.http.get<ResumoVaga[]>(this.vagasUrl)
  }

  //Busca uma vaga por id
  public MostrarVaga(id: number) : Observable<TudoVaga> {
    return this.http.get<TudoVaga>(this.vagasUrl + id)
  }

  //Pega o resumo de uma vaga
  public GetEmpresa() : Observable<CandidatoEmpresa[]> {
    return this.http.get<CandidatoEmpresa[]>(this.vagasUrl + "empresa")
  }

  //Pega uma vaga
  public GetVagas(id: number) : Observable<CandidatoEmpresa> {
    return this.http.get<CandidatoEmpresa>(this.vagasUrl + "empresa/" + id)
  }

  //Resumão da vaga
  public GetEmpresaVaga(id: number) : Observable<CandidatoEmpresa> {
    return this.http.get<CandidatoEmpresa>(this.vagasUrl + "vagaempresa/" + id)
  }
}
