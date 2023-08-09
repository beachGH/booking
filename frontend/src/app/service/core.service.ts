
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get("/getAll").pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error: any) => throwError(error)
      )
    );
  }

  get(id: string){
    return this.httpClient.get("/getAll/"+id).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error: any) => throwError(error)
      )
    );
  }


  seve(entity: any){
    return this.httpClient.post("/getAll",entity).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error: any) => throwError(error)
      )
    );
  }

}
