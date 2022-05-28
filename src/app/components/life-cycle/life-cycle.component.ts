import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  //alguns ciclos precisam do input
  @Input() number = 10;

  //TODOS OS CICLOS DE VIDA SAO EXECUTADOS UMA VEZ AO CARREGAR O COMPONENTE - COM EXEÇÃO DO ONCHANGES E DO ONDESTROY

  //1 - PRIMEIRO A SER CHAMADO
  constructor() { 
    console.log('chamou o Constructor')
  }

  //2? - SO EXECUTA SE HOUVER ALGUMA MUDANCA NO COMPONENTE INPUT/BOTAO...
  ngOnChanges(changes: SimpleChanges): void {
    console.log('chamou o OnChanges')
  }

  //3 - SÓ É CHAMADO UMA UNICA VEZ - QUANDO
  ngOnInit(): void {
    console.log('chamou o OnInit')
  }

  //4
  ngDoCheck(): void {
    console.log('chamou o DoCheck')
  }

  //5
  ngAfterContentInit(): void {
    console.log('chamou o AfterContentInit')
  }

  //6
  ngAfterContentChecked(): void {
    console.log('chamou o AfterContentChecked')
  }

  //7
  ngAfterViewInit(): void {
    console.log('chamou o AfterViewInit')
  }

  //8
  ngAfterViewChecked(): void {
    console.log('chamou o AfterViewChecked')
  }

  //É CHAMADO QUANDO UM COMPONENTE É DESTRUIDO - COM NGIF POR EXEMPLO
  ngOnDestroy(): void {
    console.log('chamou o OnDestroy')
  }

}