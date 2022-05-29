import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  //criamos um array de tarefas chamado todos, do tipo todo - interface no models
  todos: Array<Todo> = [];
  //inicializa a interface
  tarefa: Todo = {
    id: 0,
    title: '',
    done: false,
  }

  constructor() { }

  ngOnInit(): void {
    //variavel tarefas recebe uma string JSON e convert em array de objetos - FAZ O CAMINHO INVERSO do JSON STRINGIFY - o PARSE É O CONTRARIO
    //aqui verificamos se ja existe o arqquivo no localStorage
    //para nao dar erro de tipagem
    let itens: any = localStorage.getItem('tarefas');
    let tarefas = JSON.parse(itens);
    if(!tarefas) {
      this.todos = [];
    } else {
      this.todos = tarefas;
    }
  }

  addTodo(title: string){
    //criando uma forma de atribuir e autoincrementar o id
    //const id = this.todos.length + 1;
    //como o todo virou classe podemos instanciar o mesmo
    //insere no array com push o id calculado localmente - o titulo da tarefa e o boolean false
    //a classe Todo tem que ter as propriedades PUBLICAS para que o modulo possa gravar as alteracoes
    //devido a erros na iteracao e ter que instanciar a classe, voltou a ser interface
    //this.todos.push(new Todo(id, title, false));
    const id = this.todos.length + 1;
    this.todos.push({
      id: id,
      title: title,
      done: false,
    });
    //salva o array de tarefas em um arquivo local chamado tarefas.txt, porem o setItem espera uma saida string, e nao um array de objetos, por isso transformamos o array todos em um formato JSON
    localStorage.setItem('tarefas', JSON.stringify(this.todos));
    console.log(this.todos);
  }

  //funcao PAI que exclui o objeto do array TODOS recebe a tarefa a ser excluida do componente filho que lista o item. Recebendo o evento como parametro do metodo
  removeTodo(tarefaSel: any){
    console.log(tarefaSel);
    //cria uma variavel indice que vai receber o index do array onde o objeto igual ao selecionado pelo usuario para exclusao foi encontrado - salva esse indice
    let index = this.todos.indexOf(tarefaSel);
    //com o indice em maos, chamamos o array todos e fazemos um splice no array (remocao), o splice pode remover varios objetos a partir do indice informado, como só queremos excluir o proprio objeto selecionado, o numero de objetos é 1
    this.todos.splice(index,1);
    //atualiza o localstorage quando exclui um ou mais itens da lista
    localStorage.setItem('tarefas', JSON.stringify(this.todos));
  }
}
