import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {

  // cria uma variavel array que vai ser do tipo da interface user que criamos para receber os dados da api
  users: Array<User> = [];
  //injeta o servico dentro do construtor deste componente para ter acesso aos metodos
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // tem que chamar o metodo dentro do ciclo de vida do angular
    this.getUsers();
  }
  // metodo para listar os usuarios existentes na API existente no servico injetado
  // cria um metodo com o mesmo nome do metodo do servico (poderia ser diferente), esse metodo chama o metodo do servico e se subscreve no observable (assincrono), assim que vier a resposta da requisicao, atraves de uma funcao arrow a resposta da requisao (variavel response) será colocada no array users criado logo acima
  getUsers(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    }, (err) => {
      console.log('ERRO AO LISTAR', err);
    })
  }

  //metodo para deletar um usuario, o botao de delete esta no componente userList
  //criamos um metodo local que chama o servico e o metodo do servico
  //para deletar é necessario o id do usuario
  //esse metodo nao retorna nada, só exclui o valor da base void
  //trata os erros e em caso de sucesso ele faz um refresh na listagem
  deleteUser(id: number):void{
    this.userService.deleteUser(id).subscribe(response => {
      console.log('Usuário Excluido');
    }, (err) => {
      console.log('ERRO AO EXCLUIR' ,err)
    }, () => {
      this.getUsers();
    })
  }
}
