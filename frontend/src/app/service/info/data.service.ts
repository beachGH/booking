import { Injectable } from '@angular/core';
import { DataModel } from 'src/app/models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: DataModel = new DataModel()
  constructor() { }


  public getDataAll(): DataModel{
    return this.data;
  }

  public setData(data: DataModel): void{
    this.data = data;
  }
}
