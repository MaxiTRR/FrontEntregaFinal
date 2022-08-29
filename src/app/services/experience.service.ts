import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Exp } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  //Variable para la prueba de obtencion de datos del Backend JAVA
  url = "https://backendportfoliomaxi2.herokuapp.com/explab/";

  constructor(private http:HttpClient) { }

  
  //---------------------------------------------------------------------------
  //Metodo de prueba de GET datos desde el backend con Observable
 

  public lista(): Observable<Exp[]>{
    return this.http.get<Exp[]>(this.url + 'lista');
  }

  public detail(id:number): Observable<Exp>{
    return this.http.get<Exp>(this.url + `detail/${id}`);
  }

  public save(experience:Exp):Observable<any>{
    return this.http.post<any>(this.url + 'create', experience);
  }

  public update(id:number, experience:Exp):Observable<any>{
    return this.http.put<any>(this.url + `update/${id}`, experience);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

  //--------------------------------------------------------------------------------

  
}
