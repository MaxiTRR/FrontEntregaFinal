import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Proyectos } from 'src/app/models/models.model';

import { ChangeStyleService } from 'src/app/services/change-style.service';
import { ProjectsService } from 'src/app/services/projects.service';

import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  project:Proyectos[] = [];
  proToUpdate!:Proyectos;
  
  tituloPro:string='';
  tipoPro:string='';
  periodoPro:string='';
  descripcionPro:string='';
  imgProject:string='';

  //Variable para el cambio de Dark-Light theme
  dataTheme:boolean = false;

  isLogged = false;
  
  constructor(private changeStyleService:ChangeStyleService, private formBuilder:FormBuilder, private projectService:ProjectsService, private tokenService:TokenService) { }

  public ngOnInit():void{
    //Metodo para el cambio de Dark-Light theme
    this.changeStyleService.currentData.subscribe( dataTheme => this.dataTheme = dataTheme);

    this.cargarProject();

    //Validacion para saber si estamos logueados
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarProject():void{
    this.projectService.lista().subscribe(
      data =>{
        this.project = data;
      }
    )
  }

  onCreate():void{
    const pro = new Proyectos(this.tituloPro, this.tipoPro, this.periodoPro, this.descripcionPro, this.imgProject);
    this.projectService.save(pro).subscribe(
      data =>{
        alert("Project añadida");
      }, err =>{
        alert("Algo salio mal");
      }
    );
  }

  findProject(id:any){
    this.projectService.detail(id).subscribe(
      data =>{
        this.proToUpdate = data;
        console.log(id);
      }
    );
  }

  onUpdate(id:any):void{
    this.projectService.update(id, this.proToUpdate).subscribe(
      data =>{
        this.cargarProject();
      }
    );
  }

  deleteProject(id:any){
    this.projectService.delete(id).subscribe(
      data =>{
        this.cargarProject();
      }
    )
  }

  

}
