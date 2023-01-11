import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title title="Bem-Vindo" *ngIf="destroy"></app-title>
  {{valor}}
  <button (click)="adicionarNumber()">Adiciona Número</button>
  <br>
  <br>
  <button (click)="destroyTitle()">Destruir Titulo</button>
  <router-outlet></router-outlet>`
})


export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  public valor: number = 1

  public destroy: boolean = true

  constructor() { }

  destroyTitle(){
    this.destroy = false
  }

  adicionarNumber(): number{
    return this.valor += 1
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngOnInit(): void {
    console.log(1)
  }



}
