import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atleta } from '../entities/atleta';

const apiLink = "http://localhost:8080/atleta"
@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  constructor(private httpClient : HttpClient) {}

  listar() : Observable<any>{
    return this.httpClient.get<Atleta[]>(`${apiLink}/listar`);
  }
}
