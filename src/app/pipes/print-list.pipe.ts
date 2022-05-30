import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printList',
  pure: false
})
export class PrintListPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    let str = '';
    //testa se o array não é vazio
    if(value.length) {
      value.forEach(conteudo => {
       str = str+' '+conteudo; 
      });
    }
    return str;
  }
}
