import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Educacion } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  //Variable para la prueba de obtencion de datos del Backend JAVA
  url = "https://backendportfoliomaxi2.herokuapp.com/education/";

  constructor(private http:HttpClient) { }

  
  //---------------------------------------------------------------------------
  //Metodo de prueba de GET datos desde el backend con Observable
  

  public lista(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url + 'lista');
  }

  public detail(id:number): Observable<Educacion>{
    return this.http.get<Educacion>(this.url + `detail/${id}`);
  }

  public save(education:Educacion):Observable<any>{
    return this.http.post<any>(this.url + 'create', education);
  }

  public update(id:number, education:Educacion):Observable<any>{
    return this.http.put<any>(this.url + `update/${id}`, education);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

  //--------------------------------------------------------------------------------


}
