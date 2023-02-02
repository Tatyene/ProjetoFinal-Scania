import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResumoVaga } from '../interfaces/resumo-vaga';
import { HttpClient } from '@angular/common/http'
import { TudoVaga } from '../interfaces/tudo-vaga';
import { CandidatoEmpresa } from '../interfaces/candidatoEmpresa';
import { Vagas } from '../classes/vagas';

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

  //Pega a lista de vagas da empresa
  public getEmpresaVaga(idempresa: number) : Observable<CandidatoEmpresa[]> {
    return this.http.get<CandidatoEmpresa[]>(this.vagasUrl + "vagaempresa/" + idempresa)
  }
  //Busca a vaga por id 
  public getVagaIdApi(id: number) : Observable<Vagas> {
    return this.http.get<Vagas>(this.vagasUrl + "vaga/" + id);
  }
  //Deleta Vaga / 
  public deletarVaga(id: number) : Observable<Vagas> {
    const url = `${this.vagasUrl}${id}`;
    return this.http.delete<Vagas>(url);
  }
  //Atualiza a vaga / 
  public alterarVaga(vaga: Vagas, id: number) : Observable<Vagas> {
    const url = `${this.vagasUrl}${id}`;
    return this.http.put<Vagas>(url, vaga);
  }
  //Realiza o cadastro da vaga / 
  public postVaga(vaga: Vagas) : Observable<Vagas> {
    return this.http.post<Vagas>(this.vagasUrl, vaga);
  }
}
