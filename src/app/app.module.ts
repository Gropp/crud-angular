// imports da biblioteca do angular...
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

//imports de modulos locais...
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { ButtonComponent } from './components/button/button.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { TodoItemComponent } from './pages/todo/todo-item/todo-item.component';
import { PipesExampleComponent } from './pages/pipes-example/pipes-example.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersListComponent,
    UserFormComponent,
    DataBindingComponent,
    ButtonComponent,
    LifeCycleComponent,
    TodoListComponent,
    TodoItemComponent,
    PipesExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
