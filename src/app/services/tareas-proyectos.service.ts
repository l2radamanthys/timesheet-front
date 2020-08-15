import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable()
export class TareasProyectosService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl + 'tareas-proyectos';
  }

  public all() {
    return this.http.get(this.baseUrl).pipe(map((response: any) => {
      return response;
    }));
  }
}
