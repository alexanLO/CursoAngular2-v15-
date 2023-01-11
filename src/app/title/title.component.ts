import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy{
 
  @Input() public title:String = "Primeiro Projeto"

  constructor(){ }

  
  ngOnInit(): void { }
  
  ngOnChanges(): void { 
    console.log("Informação alterada com sucesso!")
  }

  ngOnDestroy(): void {
    console.log("Esse titulo foi destruido!")
  }
}
