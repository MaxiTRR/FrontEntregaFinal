import { Component,OnInit } from '@angular/core';

import { ChangeStyleService } from './services/change-style.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioAngular';

  constructor(private changeStyleService:ChangeStyleService) {}

  data:boolean = false;

  public ngOnInit():void{
    this.changeStyleService.currentData.subscribe( data => this.data = data);
  }

  //setMode = false;

  //receiveMode(setDark:boolean){
  //  this.setMode = setDark;
  //  console.log(this.setMode)
  //}
}
