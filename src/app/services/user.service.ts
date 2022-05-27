import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { User } from '../models/user';

// servico que sera injetado no constructor dos outros componentes
@Injectable({
  providedIn: 'root'
})
export class UserService {

  //preciso guardar em uma variavel o endereco URL da APi referente aos dados dos usuarios, que é o foco deste servico - que sera usado nos metodos deste servico
  apiUrl = 'https://sheet.best/api/sheets/25514dd6-d495-40c1-bb72-3444ff5bb152'

  //objeto para passar opcionalmente informacoes para a API fora do Body
  //essa é a opcional - os dados sao exemplos
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  //no constructor dos servicos nos iniciamos o HTTPCLIENT para ter acesso as APIs
  constructor(private httpClient: HttpClient) { }

  //Metodos para poder trabalhar com a entidade usuario
  //C.R.U.D

  //busca os usuarios - GET (READ)
  //o observable espera receber uma lista de usuarios, um array
  //tem que tipar o observable e o retorno com os tipos de dados
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl)
  }

  //metodo para salvar o usuario na api/bd
  //cadastra um usuario por vez, entao não é array
  //o post exige a url e o body () - que sao os dados do usuario a serem gravados
  //as vezes precisamos enviar um header para o post, entao criamos um objeto para isso
  postUser(user: User):Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions)
  }

  //metodo para excluir o usuario da api/bd
  //o delete recebe uma string como parametro
  //contendo a url /id/o valor do id
  deleteUser(id: number):Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

  //metodo de editar
  //ele recebe o id do usuario a ser alterado e os dados alterados
  //os parametros do put sao os mesmos que do delete - para o caso desta api/bd
  //os dados e os parametros opcionais
  updateUser (id: string, user: User):Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions );
  }

  //metodo para listar um usuario unico para popular o form de editar
  getUser(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`);
  }
}
