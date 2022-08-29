import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Skill } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  //Variable para la prueba de obtencion de datos del Backend JAVA
  url = "https://backendportfoliomaxi2.herokuapp.com/skill/";

  constructor( private http:HttpClient) { }

  //---------------------------------------------------------------------------
  //Metodo de prueba de GET datos desde el backend con Observable
 
  public lista(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.url + 'lista');
  }

  public detail(id:number): Observable<Skill>{
    return this.http.get<Skill>(this.url + `detail/${id}`);
  }

  public save(skill:Skill):Observable<any>{
    return this.http.post<any>(this.url + 'create', skill);
  }

  public update(id:number, skill:Skill):Observable<any>{
    return this.http.put<any>(this.url + `update/${id}`, skill);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

  //--------------------------------------------------------------------------------

}
