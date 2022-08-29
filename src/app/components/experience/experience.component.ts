import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Exp } from 'src/app/models/models.model';

import { ChangeStyleService } from 'src/app/services/change-style.service';
import { ExperienceService } from 'src/app/services/experience.service';

import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  experiencia:Exp[] = [];

  expToUpdate!:Exp;
  

  lugar:string = '';
  periodo:string = '';
  area:string = '';
  rol:string = '';
  logo:string = '';


  //Variable para el cambio de Dark-Light theme
  dataTheme:boolean = false;

  isLogged = false;

  constructor( private changeStyleService:ChangeStyleService, private formBuilder:FormBuilder, private experienceService:ExperienceService, private tokenService:TokenService) { }

  ngOnInit(): void {
    //Metodo para el cambio de Dark-Light theme
    this.changeStyleService.currentData.subscribe( dataTheme => this.dataTheme = dataTheme);

    this.cargarExperience();
    
    //Validacion para saber si estamos logueados
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

  }

  cargarExperience():void{
    this.experienceService.lista().subscribe(
      data =>{
        this.experiencia = data;
      }
    )
  }

  onCreate():void{
    const expe = new Exp(this.lugar, this.periodo, this.area, this.rol, this.logo);
    this.experienceService.save(expe).subscribe(
      data =>{
        alert("Experience añadida");
      }, err =>{
        alert("Algo salio mal");
      }
    );
  }

  findExperience(id:any){
    this.experienceService.detail(id).subscribe(
      data =>{
        this.expToUpdate = data;
        console.log(id);
      }
    );
  }

  onUpdate(id:any):void{
    this.experienceService.update(id, this.expToUpdate).subscribe(
      data =>{
        this.cargarExperience();
        
      }
    );
  }

  deleteExperience(id:any){
    this.experienceService.delete(id).subscribe(
      data =>{
        this.cargarExperience();
      }
    )
  }
}
