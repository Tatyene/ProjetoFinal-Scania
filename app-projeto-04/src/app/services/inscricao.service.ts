import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListarVagaECandidato } from '../interfaces/listar-vaga-ecandidato';
import { InscricoesVagaVM } from '../interfaces/inscricoes-vaga-vm';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

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
  public DeletarInscricao(id: number) : Observable<number> {
    return this.http.delete<number>(this.inscricaoUrl + id)
  }
}

