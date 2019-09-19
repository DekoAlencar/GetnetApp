import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumTipo'
})
export class EnumPipe implements PipeTransform {

  transform(value: string, param?: string): string {
    switch (param){
      case 'C': 
        return 'Crédito';
      case 'D':
        return 'Débito';
      case 'B':
        return 'Boleto';
      default:
        break;
    }
    return null;
  }

}
