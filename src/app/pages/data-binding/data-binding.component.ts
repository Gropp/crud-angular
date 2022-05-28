import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Teste de DATA-BINDIG';
  nome = 'Fernando Gropp';
  imgUrl = 'https://picsum.photos/100/100';
  imgDesc = 'Esta é uma imagem vindo do componente';
  buttonText = 'clique aqui!';
  //variaveis para class binding.
  textRed = false;
  className = 'text-Red';
  //variaveis para style binding.
  bgColor = 'black';
  fnColor = 'white';
  fnSize = '20px';
  imgWidth = 200;
  //two-way data binding
  textInput = '';

  //VARIAVEL PARA TESTE DO COMPONENTE CICLO DE VIDA DO COMPONENTE
  number=0;
  destroi = false;

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome() {
    return this.nome;
  }

  clicou(){
    this.textRed = true;
    this.text =  'Alterado pelo botao com propriedade de event binding';
    console.log('Clicou aqui!');
  }
  
  clicou2(value: any){
    console.log('Clicou aqui!', value);
  }

  //METODO PARA USAR O EVENTO FILHO DE CLICAR NO BOTAO
  clicouFilho(text: any) {
    console.log(text); {
      
    }
  }

  //METODOS PARA TESTER O ONCHANGE EVENT DO CICLO DE VIDA
  incrementa(){
    //incrementa a variavel
    this.number++;
    console.log(this.number)
  }

  destroiComponente(){
    this.destroi = true;
  }

  constroiComponente(){
    this.destroi = false;
  }
}
