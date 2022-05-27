import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  //criamos um formulario de usuario do tipo formGroup
  //precisamos referenciar esse metodo de formulario na tag form do html que vai chamar esses metodos
  userForm: FormGroup;

  //variavel para fazer o autoincrement do campo id na tabela da api
  //um array do tipo User para guardar o resultado do get
  users: Array<User> = [];

  //variavel para guardar o id do usuario em caso de edit
  userId: any = '';

  //injeta o servico de formulario do FormBuilder
  //passa o return para a variavel local em forma de grupo
  //inicializa os campos
  //injeta tambem o servico users para fazer o post dos dados na api
  //precisamos injetar um novo servico para que possamos ver a rota atual do objeto que esta manipulando o formulario - paramMAP - que observa as rotas (assincrono)
  constructor(
    private fb: FormBuilder, 
    private userService: UserService,
    private actRoute: ActivatedRoute,
    private router: Router) {
    this.userForm = this.fb.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: 0,
      profissao: '',
    })    
   }

  ngOnInit(): void {

    //ao inicar o componente o metodo paramMap pega a rota e o id do usuario - quando existir - editar
    this.actRoute.paramMap.subscribe(params => {
      this.userId = params.get('id');
      if(this.userId !== null) {
        //existindo um id na rota, quer dizer que o usuario ja é cadastrado na api/bd
        //eu chamo o servico getuser que retorna o array de um unico usuario baseado no id da rota
        //entao eu populo o formulario para que o usuario possa ver o conteudo e possa ver o que ira alterar
        this.userService.getUser(this.userId).subscribe(result => {
          //o metodo patchValue coloca valores nos campos do formulario indice 0
          this.userForm.patchValue({
            id: result[0].id,
            nome: result[0].nome,
            sobrenome: result[0].sobrenome,
            idade: result[0].idade,
            profissao: result[0].profissao,
          })
        })
      }
    })

    //chama esse metodo para buscar o id do usuario para poder colocar o proximo id na hora de inserir um usuario novo
    this.getUsers();
  }

 //vamos executar o get dos usuarios para carregar a variavel users local, damos um lenght para vermos o tamanho do array, entao o id sempre sera o tamanho do array + 1
  getUsers() { 
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    })
  }
  //metodo chamado pelo html atravez de uma diretiva de evento (click)
  createUser(){
    //o userForm ja traz os dados como um objeto
    //console.log(this.userForm);
    //chama o servico do usuario e o metodo postuser passando como parametro o value do objeto retornado pelo userform. subscreve no observavel e manda o resultado atraves de uma funcao arrow, retornando uma mensagem em caso de sucesso 
    //atribui ao valor do id do formulario o valor do tamanho do array + 1
    this.userForm.get('id')?.patchValue(this.users.length + 1)
    this.userService.postUser(this.userForm.value).subscribe(result => {
      console.log(`Usuário ${result.nome} ${result.sobrenome} Cadastrado com sucesso!`);
    }, (err) => {
      console.log('ERRO AO CRIAR' ,err);
    }, () => {
      this.router.navigate(['/']);
    })
  }

  //metodo para fazer um update no usuario ja cadastrado
  //passa o id do usuario e o value do formulario e em caso de sucesso volta pra o raiz
  updateUser(){
    this.userService.updateUser(this.userId, this.userForm.value).subscribe(result => {
      console.log('USUARIO ATUALIZADO', result);
    }, (err) => {
      console.log('ERRO AO SALVAR', err);
    }, () => {
      this.router.navigate(['/']);
    });
  }

  //o action button que foi relacionado ao botao enviar do formulario de usuarios
  actionButton(){
    if(this.userId !== null){
      this.updateUser()
    } else {
      this.createUser()
    }
  }
}
