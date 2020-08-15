import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable()
export class UsersService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl + 'users';
  }

  public all() {
    return this.http.get(this.baseUrl).pipe(map((response: any) => {
      return response;
    }));
  }

  public traerUsuarioByToken(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    });
    return this.http.get(`${this.baseUrl}/mi-perfil`, { headers: headers }).pipe(map((response: any) => {
      return response;
    }));
  }
}
