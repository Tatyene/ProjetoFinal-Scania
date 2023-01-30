import { Observable } from 'rxjs';
import { Usuario } from './../classes/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private Http: HttpClient){}

  loginUrl: string="http://localhost:5169/api/user"

  public postUsuarioApi(Usuario: Usuario): Observable<Usuario>{
    return this.Http.post<Usuario>(this.loginUrl, Usuario)
  }

  public get usuarios(): string[]{
    return[
      'adm', 'candidato', 'empresa'
    ]
  }
}
