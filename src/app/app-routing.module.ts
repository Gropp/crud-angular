import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { PipesExampleComponent } from './pages/pipes-example/pipes-example.component';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

// array de rotas do angular divididas em objetos
// cria uma rota que manda um argumento
const routes: Routes = [
  { 
    path: '', component: UsersListComponent
  },
  {
    path: 'form', component: UserFormComponent
  },
  {
    path: 'form/:id', component: UserFormComponent
  },
  {
    path: 'data-binding', component: DataBindingComponent
  },
  {
    path: 'todo-list', component: TodoListComponent
  },
  {
    path: 'pipes-example', component: PipesExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
