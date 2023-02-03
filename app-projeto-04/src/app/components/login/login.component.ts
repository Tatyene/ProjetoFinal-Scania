import { Usuario } from './../../classes/usuario';
import { UsuariosService } from './../../services/usuarios.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router: Router,
    private UsuariosService: UsuariosService){}

    user!: Usuario;
    erro!: string;
    storage: Storage = localStorage;

  ngOnInit(): void {
   this.user = new Usuario();
   this.storage.removeItem('user_name')
  }

  fechar(): void{
    this.router.navigate(['/candidato'])
  }

  alterar(id:string): void{
    this.router.navigate(['/vaga/atualizar/'+ id])
  }

  remover(id:string): void{
    this.router.navigate(['/vaga/remover/' + id])
  }

  direcionarEmpresa(): void{
    this.router.navigate(['/empresa'])
  }

id!: string;

  validar(usuario: Usuario): void{
    this.UsuariosService.postUsuarioApi(usuario).subscribe(res => {
      console.log(res);
      if(res){
        this.storage.setItem('user_name', usuario.nome);
        if(res.nivel == 2){
          this.direcionarEmpresa();
          if(res.nivel == 2 ){
            this.remover(this.id);
            if(res.nivel == 2){
              this.alterar(this.id);
            }
          }
        }else{
          this.fechar();
        }
      }else{
        this.erro = 'Usuario ou senha inválidos'
      }
    })
  }
  
}
