import { Component, OnInit, Input } from '@angular/core';



import { FormBuilder, FormGroup } from '@angular/forms';

import { InfoPersonal } from 'src/app/models/models.model';

import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

import { ChangeStyleService } from 'src/app/services/change-style.service';
import { InfoTextService } from 'src/app/services/info-text.service';

@Component({
  selector: 'app-info-text',
  templateUrl: './info-text.component.html',
  styleUrls: ['./info-text.component.css']
})
export class InfoTextComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  formValue!: FormGroup;
  
  infoTextData!:any;

  data:boolean = false;

  constructor(private changeStyleService:ChangeStyleService, private formBuilder:FormBuilder, public api:InfoTextService) { }

  public ngOnInit():void{
    this.formValue = this.formBuilder.group({
      nombreInfo: [''],
      titulo: [''],
      descripcion: ['']
    })
    
    


    


    
    //Metodo para el cambio de Dark-Light theme
    this.changeStyleService.currentData.subscribe( data => this.data = data);
  }

 

}
