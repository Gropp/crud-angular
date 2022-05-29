import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  //PAI - FILHO
  //precisa inicializar o objeto
  //tarefa é a propriedade que é herdada
  @Input() tarefa: Todo = {
    id: 0,
    title: '',
    done: false,
  };

  //evento que avisa ao pai que o botao excluir tarefa foi pressionado
  //para isso instanciamos o objeto eventEmitter do angular
  //ele emite o evento para o componente PAI
  @Output() remove = new EventEmitter


  //inicializa uma varivel done local de flag como false
  done = false;

  constructor() { }

  ngOnInit(): void {
  }

  //remove tarefa
  //esse  evento vem do flho e precisamos avisar o  PAI
  removeTodo():void{
    //a funcao removetodo chama o objeto instanciado de emissao de evento para avisar ao componente pai que o botao foi apertado e a funcao de remocao foi chamada
    //o argumento desse aviso é a tarefa respectiva ao botao excluir
    this.remove.emit(this.tarefa);
  }

  //marcar como feita
  markAsDone():void{
    //simplesmente muda o valor da flag local
    this.done = true;
  }

  markAsUndone():void{
    this.done = false;
  }

}
