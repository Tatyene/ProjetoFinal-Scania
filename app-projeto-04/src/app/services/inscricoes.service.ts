import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InscricoesVagaVM } from '../interfaces/inscricoes-vaga-vm';
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
  public GetInscricao() : Observable<ListarVagaECandidato[]> {
    return this.http.get<ListarVagaECandidato[]>(this.inscricaoUrl)
  }

  //Busca inscrição por id
  public GetInscricaoId(id: number) : Observable<ListarVagaECandidato> {
    return this.http.get<ListarVagaECandidato>(this.inscricaoUrl + id)
  }

  //Busca as vagas que o candidato se inscreveu
  public GetCandidatoVaga(id: number) : Observable<ListarVagaECandidato[]> {
    return this.http.get<ListarVagaECandidato[]>(this.inscricaoUrl + "candidatovaga/" + id)
  }

  //Busca os candidatos que a vaga recebeu
  public GetVagaCandidato(id: number) : Observable<ListarVagaECandidato[]> {
    return this.http.get<ListarVagaECandidato[]>(this.inscricaoUrl + "vagacandidato/" + id)
  }

  //Realizar inscrição
  public PostInscricao(inscricao: InscricoesVagaVM) : Observable<InscricoesVagaVM> {
    return this.http.post<InscricoesVagaVM>(this.inscricaoUrl, inscricao)
  }

  //Deletar inscrição
  public DeletarInscricao(id: number) : Observable<InscricaoVaga> {
    const url = `${this.inscricaoUrl}/${id}`;
    return this.http.delete<InscricaoVaga>(url);
  }
}
