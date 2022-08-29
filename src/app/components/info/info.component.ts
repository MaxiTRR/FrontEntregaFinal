import { Component, OnInit } from '@angular/core';
import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

import { ChangeStyleService } from 'src/app/services/change-style.service';
import { InfoTextService } from 'src/app/services/info-text.service';

import { InfoPersonal } from 'src/app/models/models.model';

import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  

  infoPersonal:InfoPersonal[] = [];
  infoToUpdate!:InfoPersonal;

  nombreInfo:string='';
  titulo:string='';
  descripcion:string='';
  ciudad:string='';
  fechaNac:string='';
  imgProfile:string='';

  //Variable para el cambio de Dark-Light theme
  dataTheme:boolean = false;

  isLogged = false;

  //Variable para intentar poner imagen de perfil desde el backend (borrar si no funciona y chequear el .css)
  imgEstilo:string=`background-image: url(${this.imgProfile}); height: 31.25rem; width: 31.25rem; background-size: cover; border-radius: 50%; border: #000 solid 5px;`;
 
  constructor(private changeStyleService:ChangeStyleService, public infoTextService:InfoTextService, private formBuilder:FormBuilder, private tokenService:TokenService) { }

  ngOnInit(): void {
    //Metodo para el cambio de Dark-Light theme
    this.changeStyleService.currentData.subscribe( dataTheme => this.dataTheme = dataTheme);

    this.cargarInfoPersonal();

    //Validacion para saber si estamos logueados
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarInfoPersonal():void{
    this.infoTextService.lista().subscribe(
      data =>{
        this.infoPersonal = data;
      }
    )
  }

  onCreate():void{
    const info = new InfoPersonal(this.nombreInfo, this.titulo, this.descripcion, this.ciudad, this.fechaNac, this.imgProfile);
    this.infoTextService.save(info).subscribe(
      data =>{
        alert("InfoPersonal añadida");
      }, err =>{
        alert("Algo salio mal");
      }
    );
  }

  findInfoPersonal(id:any){
    this.infoTextService.detail(id).subscribe(
      data =>{
        this.infoToUpdate = data;
        console.log(id);
      }
    );
  }

  onUpdate(id:any):void{
    this.infoTextService.update(id, this.infoToUpdate).subscribe(
      data =>{
        this.cargarInfoPersonal();
      }
    );
  }

  deleteInfoPersonal(id:any){
    this.infoTextService.delete(id).subscribe(
      data =>{
        this.cargarInfoPersonal();
      }
    )
  }

}
