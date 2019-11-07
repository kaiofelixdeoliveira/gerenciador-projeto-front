import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';
import { Projeto } from '../../models/projeto.model';
import { Observable } from 'rxjs';
import { FactoryEndpointService } from '../../shared/services/factory-endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  endpointUrl: string = "/api/projeto";

  constructor(private http: HttpClient, private factoryEndpointService: FactoryEndpointService) { }


  // GET
  getAllProjetos(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(`${environment.apiUrl}${this.endpointUrl}`)
      .pipe(
        retry(1),
        catchError(this.factoryEndpointService.errorHandler)
      )
  }

  // POST
  addNewProjeto(data): Observable<Projeto> {
    return this.http.post<Projeto>(`${environment.apiUrl}${this.endpointUrl}`, JSON.stringify(data), this.factoryEndpointService.httpOptions)
      .pipe(
        retry(1),
        catchError(this.factoryEndpointService.errorHandler)
      )
  }

  // Update
  updateProjeto(data,id): Observable<Projeto> {
    return this.http.put<Projeto>(`${environment.apiUrl}${this.endpointUrl}/${id}`, JSON.stringify(data), this.factoryEndpointService.httpOptions)
      .pipe(
        retry(1),
        catchError(this.factoryEndpointService.errorHandler)
      )
  }
}
