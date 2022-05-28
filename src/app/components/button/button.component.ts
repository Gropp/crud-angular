import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  //componente do Angular - PAI - FILHO
  //decoretor com uma propriedade
  //para cada varivel tem que por um input
  @Input() btnText:string = 'Clique!';
  @Input() btnType:string = 'btn-success';
  
  //compomente angular - FILHO - PAI
  //este componente faz um pool no filho esperando um evento de clickChild
  //CUIDAR COM NOMES DE EVENTOS QUE POSSAM COINCIDIR COM PALAVRAS CHAVES DO HTML/JS/TS
  @Output() clickChild = new EventEmitter;

  //variaveis locais
  textFilho = 'Clicou no filho';

  constructor() { }

  ngOnInit(): void {
  }

  clicou(){
    //quando o evento for "OUVIDO" ele retorna a variavel
    this.clickChild.emit(this.textFilho);
    console.log(this.textFilho);
  }

}
