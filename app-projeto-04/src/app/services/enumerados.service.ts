import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visualizacao } from '../classes/vizualizacao';

@Injectable({
  providedIn: 'root'
})
export class EnumeradosService {

  constructor(private http: HttpClient) { }

  enumUrl: string = "http://localhost:5169/api/enumvaga/";


  public getBeneficios() : Observable<Visualizacao[]> {
    return this.http.get<Visualizacao[]>(this.enumUrl + "beneficios")
  }
  
  //Lista a escolaridade
  public getEscolaridades() : Observable<Visualizacao[]> {
    return this.http.get<Visualizacao[]>(this.enumUrl + "escolaridade")
  }
  //Lista os turnos
  public getTurnos() : Observable<Visualizacao[]> {
    return this.http.get<Visualizacao[]>(this.enumUrl + "turno")
  }
  //Lista a modalidade
  public getModalidades() : Observable<Visualizacao[]> {
    return this.http.get<Visualizacao[]>(this.enumUrl + "modalidade")
  }
}
