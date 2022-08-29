import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChangeStyleService } from 'src/app/services/change-style.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  data:boolean = false;

  constructor( private changeStyleService:ChangeStyleService, private router:Router) { }

  ngOnInit(): void {
    //Metodo para el cambio de Dark-Light theme
    this.changeStyleService.currentData.subscribe( data => this.data = data);
  }

}
