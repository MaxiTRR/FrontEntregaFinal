import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  //Variable para la prueba de obtencion de datos del Backend JAVA
  url = "https://backendportfoliomaxi2.herokuapp.com/project/";


  constructor(private http:HttpClient) { }

  //---------------------------------------------------------------------------
  //Metodo de prueba de GET datos desde el backend con Observable
  

  public lista(): Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.url + 'lista');
  }

  public detail(id:number): Observable<Proyectos>{
    return this.http.get<Proyectos>(this.url + `detail/${id}`);
  }

  public save(project:Proyectos):Observable<any>{
    return this.http.post<any>(this.url + 'create', project);
  }

  public update(id:number, project:Proyectos):Observable<any>{
    return this.http.put<any>(this.url + `update/${id}`, project);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

  //--------------------------------------------------------------------------------

}
