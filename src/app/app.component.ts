import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title title="Bem-Vindo"></app-title>
  <router-outlet></router-outlet>`
})


export class AppComponent implements OnInit{

  constructor(){ }
  
  ngOnInit(): void { 
    console.log(1)
   }

  

}
