import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent {

  public nome: String = "Roberto"
  public idade: number = 29
  public checkedDesabled:boolean = true
  public imgSRC: String = "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg?t=1666290860"

  constructor(){ }

}
