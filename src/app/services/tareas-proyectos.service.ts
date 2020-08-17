import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  public actualizar(formData) {
    return this.http.post(this.baseUrl + '/actualizar', JSON.stringify(formData)).pipe(map((response: any) => {
      return response;
    }));
  }

  public query(parametros: any) {
    const params = new HttpParams({ fromObject: parametros });
    return this.http.get(this.baseUrl, { params: params }).pipe(map((response: any) => {
      return response;
    }));
  }
}
