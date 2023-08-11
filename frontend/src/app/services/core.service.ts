import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private apiUrl = 'http://localhost:8050/api/v1';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.apiUrl + "/customer").pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error: any) => {
        return  throwError(error);
      })
    );
  }

  get(id: string) {
    return this.httpClient.get("/getAll/" + id).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error: any) => {
        return  throwError(error);
      })
    );
  }

  save(entity: any) {
    return this.httpClient.post(this.apiUrl + "/customer", entity).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error: any) => {
        return  throwError(error);
      })
    );
  }
}
