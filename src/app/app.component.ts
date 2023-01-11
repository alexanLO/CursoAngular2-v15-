import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})


export class AppComponent implements OnInit{
  title = 'primeiro-projeto';

  constructor(){ }
  
  ngOnInit(): void { 
    console.log(1)
   }

  

}
