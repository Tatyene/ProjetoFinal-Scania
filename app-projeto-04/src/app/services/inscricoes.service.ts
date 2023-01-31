import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListarVagaECandidato } from '../interfaces/listar-vaga-ecandidato';
import { HttpClient } from '@angular/common/http'
import { InscricaoVaga } from '../interfaces/InscricoesVaga';

@Injectable({
  providedIn: 'root'
})
export class InscricoesService {

  constructor(private http: HttpClient) { }
  inscricaoUrl: string = "http://localhost:5169/api/inscricoes/";

  //Lista todas as inscrições
  public getInscricao() : Observable<ListarVagaECandidato[]> {
    return this.http.get<ListarVagaECandidato[]>(this.inscricaoUrl)
  }

  //Busca inscrição por id
  public getInscricaoId(id: number) : Observable<ListarVagaECandidato> {
    return this.http.get<ListarVagaECandidato>(this.inscricaoUrl + id)
  }

  //Busca as vagas que o candidato se inscreveu
  public getCandidatoVaga(id: number) : Observable<ListarVagaECandidato[]> {
    return this.http.get<ListarVagaECandidato[]>(this.inscricaoUrl + "candidatovaga/" + id)
  }

  //Busca os candidatos que a vaga recebeu
  public getVagaCandidato(id: number) : Observable<ListarVagaECandidato[]> {
    return this.http.get<ListarVagaECandidato[]>(this.inscricaoUrl + "vagacandidato/" + id)
  }

  //Realizar inscrição
  public postInscricao(inscricao: InscricaoVaga) : Observable<InscricaoVaga> {
    return this.http.post<InscricaoVaga>(this.inscricaoUrl, inscricao)
  }

  //Deletar inscrição
  public deletarInscricao(id: number) : Observable<ListarVagaECandidato> {
    const url = `${this.inscricaoUrl}${id}`;
    return this.http.delete<ListarVagaECandidato>(url);
  }
}
