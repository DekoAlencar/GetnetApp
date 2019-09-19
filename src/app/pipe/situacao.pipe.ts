import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'situacao'
})
export class SituacaoPipe implements PipeTransform {

  transform(value: string, param?: string): string {
    switch(param){
      case 'P':
        return 'Pendente';
        break;
      case 'DENIED':
        return 'Negado';
        break;
      case 'ACCEPT':
        return 'Aceita';
        break;
      case 'PENDING':
        return 'Emitido';
        break;
      case 'APPROVED':
        return 'Aprovado';
        break;
      default:
        break;
    }
    return null;
  }

}
