import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Habilidad } from '../model/habilidad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  expURL = environment.URL + 'habilidad/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.expURL + `detail/${id}`);
  }

  public save(habilidad: Habilidad): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'crear', habilidad)
  }

  public update(id: number, habilidad: Habilidad): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `editar/${id}`, habilidad);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `borrar/${id}`);
  }
}
