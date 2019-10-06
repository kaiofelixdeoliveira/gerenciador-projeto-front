import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';
import { Gestor } from '../../models/gestor.model';
import { Observable } from 'rxjs';
import { FactoryEndpointService } from '../../shared/services/factory-endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class GestoresService {

  endpointUrl: string = "/api/gestor";

  constructor(private http: HttpClient, private factoryEndpointService: FactoryEndpointService) { }


  // GET
  getAllGestores(): Observable<Gestor[]> {
    return this.http.get<Gestor[]>(`${environment.apiUrl}${this.endpointUrl}`)
      .pipe(
        retry(1),
        catchError(this.factoryEndpointService.errorHandler)
      )
  }

  // POST
  addNewGestor(data): Observable<Gestor> {
    return this.http.post<Gestor>(`${environment.apiUrl}${this.endpointUrl}`, JSON.stringify(data), this.factoryEndpointService.httpOptions)
      .pipe(
        retry(1),
        catchError(this.factoryEndpointService.errorHandler)
      )
  }
}
