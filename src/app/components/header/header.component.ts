import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faLightbulb} from '@fortawesome/free-solid-svg-icons';

import { ChangeStyleService } from 'src/app/services/change-style.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faLightbulb = faLightbulb;

  @Output() darkMode = new EventEmitter<boolean>();
  
  //Variable para el cambio de Dark-Light theme
  data = false;

  isLogged = false;

  constructor(private changeStyleService:ChangeStyleService, private router:Router, private tokenService:TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    
  }

  sendClickEvent(){
    this.data = !this.data;
    this.changeStyleService.changeData(this.data);
  }

  login(){
    this.router.navigate(['/login']);
  }

  onLogout():void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
