import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0;
  text = ''
  date  = Date.now();
  dateObj = new Date;
  pessoa = {
    nome: 'Fernando',
    idade: '49',
    profissao: 'Cientista da Computação'
  }
  nomes = ['Fernando', 'Ana', 'Maria'];
  constructor() { }

  ngOnInit(): void {
  }

  valorPadrao():void {
    this.number = 123456789;
  }

  textoPadrao():void {
    this.text = 'o rato roeu a roupa do rei de roma.';
  }

  add(text:string){
    this.nomes.push(text);
  }

}
