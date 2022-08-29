import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/models.model';
import { AutenticationService } from 'src/app/services/autentication.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  isLogged = false;
  isLogginFail = false;
  loginUsuario!:LoginUsuario;
  nombreUsuario!:string;
  password!:string;
  roles:string[] = [];
  errMsj!:string;
  
  

  constructor(private autenticationService:AutenticationService, private tokenService:TokenService, private router:Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin():void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.autenticationService.login(this.loginUsuario)
      .subscribe(
        data =>{
          this.isLogged = true;
          this.isLogginFail = false;
          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.nombreUsuario);
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          this.router.navigate(['portfolio']);
        }, err =>{
          this.isLogged = false;
          this.isLogginFail = true;
          this.errMsj = err.error.mensaje;
          console.log(this.errMsj);
        });
  }

  

}
