import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { InfoPersonal } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class InfoTextService {

  //Variable para la prueba de obtencion de datos del Backend JAVA
  url = "https://backendportfoliomaxi2.herokuapp.com/infoPersonal/";

  constructor(private http:HttpClient) { }

  //---------------------------------------------------------------------------
  //Metodo de prueba de GET datos desde el backend con Observable
  

  public lista(): Observable<InfoPersonal[]>{
    return this.http.get<InfoPersonal[]>(this.url + 'lista');
  }

  public detail(id:number): Observable<InfoPersonal>{
    return this.http.get<InfoPersonal>(this.url + `detail/${id}`);
  }

  public save(infoPersonal:InfoPersonal):Observable<any>{
    return this.http.post<any>(this.url + 'create', infoPersonal);
  }

  public update(id:number, infoPersonal:InfoPersonal):Observable<any>{
    return this.http.put<any>(this.url + `update/${id}`, infoPersonal);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

  //--------------------------------------------------------------------------------

  
}
