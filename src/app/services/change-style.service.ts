import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeStyleService {
  dataSource = new BehaviorSubject(false);
  currentData = this.dataSource.asObservable();

  constructor() { }

  public changeData(data:boolean):void{
    this.dataSource.next(data);
  }
}
