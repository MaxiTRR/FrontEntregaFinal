import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Educacion } from 'src/app/models/models.model';

import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

import { ChangeStyleService } from 'src/app/services/change-style.service';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  education:Educacion[] = [];
  eduToUpdate!:Educacion;

  nombreInst:string ='';
  periodoEdu:string ='';
  tituloEdu:string ='';
  descripcionEdu:string ='';
  logoEdu:string = '';

  isLogged = false;

  //Variable para el cambio de Dark-Light theme
  dataTheme:boolean = false;
  
  constructor(private changeStyleService:ChangeStyleService, private formBuilder:FormBuilder, private educationService:EducationService, private tokenService:TokenService) { }

  public ngOnInit():void{
    //Metodo para el cambio de Dark-Light theme
    this.changeStyleService.currentData.subscribe( dataTheme => this.dataTheme = dataTheme);

    this.cargarEducation();
    
    //Validacion para saber si estamos logueados
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarEducation():void{
    this.educationService.lista().subscribe(
      data =>{
        this.education = data;
      }
    );
  }

  onCreate():void{
    const edu = new Educacion(this.nombreInst, this.periodoEdu, this.tituloEdu, this.descripcionEdu, this.logoEdu);
    this.educationService.save(edu).subscribe(
      data =>{
        alert("Education añadida");
      }, err =>{
        alert("Algo salio mal");
      }
    );
  }

  findEducation(id:any){
    this.educationService.detail(id).subscribe(
      data=>{
        this.eduToUpdate = data;
      }
    );
  }

  onUpdate(id:any):void{
    this.educationService.update(id, this.eduToUpdate).subscribe(
      data=>{
        this.cargarEducation();
      }
    );
  }

  deleteEducation(id:any){
    this.educationService.delete(id).subscribe(
      data=>{
        this.cargarEducation();
      }
    );
  }

}
