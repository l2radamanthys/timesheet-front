import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable()
export class TareasService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl + 'tareas';
  }

  public all() {
    return this.http.get(this.baseUrl).pipe(map((response: any) => {
      return response;
    }));
  }
}
