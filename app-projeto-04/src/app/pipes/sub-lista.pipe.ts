import { Pipe, PipeTransform } from '@angular/core';
import { ResumoVaga } from '../interfaces/resumo-vaga';

@Pipe({
  name: 'sublista'
})
export class SubListaPipe implements PipeTransform {

  transform(vagas: ResumoVaga[], input: string): ResumoVaga[] {
    if(!input){
      return vagas;
    }else {
      return vagas.filter(v => v.titulo_vaga.toLowerCase().includes(input.toLowerCase()));
    }
  }
}