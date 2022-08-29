import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';


import { ChangeStyleService } from 'src/app/services/change-style.service';

import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import { Skill } from 'src/app/models/models.model';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  skill:Skill[] = [];
  skillToUpdate!:Skill;

  nombre:string ='';
  nivel:number=0;

  //Variable para el cambio de Dark-Light theme
  dataTheme:boolean = false;

  isLogged = false;

  constructor(private formBuilder:FormBuilder, private changeStyleService:ChangeStyleService, private skillService:SkillService, private tokenService:TokenService) { }

  ngOnInit(): void {
    //Metodo para el cambio de Dark-Light theme
    this.changeStyleService.currentData.subscribe( dataTheme => this.dataTheme = dataTheme);

    this.cargarSkill();

    //Validacion para saber si estamos logueados
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarSkill():void{
    this.skillService.lista().subscribe(
      data =>{
        this.skill = data;
      }
    )
  }

  onCreate():void{
    const sk = new Skill(this.nombre, this.nivel);
    this.skillService.save(sk).subscribe(
      data =>{
        alert("Skill añadida");
      }, err =>{
        alert("Algo salio mal");
      }
    );
  }

  findSkill(id:any){
    this.skillService.detail(id).subscribe(
      data =>{
        this.skillToUpdate = data;
        console.log(id);
      }
    );
  }

  onUpdate(id:any):void{
    this.skillService.update(id, this.skillToUpdate).subscribe(
      data =>{
        this.cargarSkill();
      }
    );
  }
 
  deleteSkill(id:any){
    this.skillService.delete(id).subscribe(
      data =>{
        this.cargarSkill();
      }
    );
  }

}
