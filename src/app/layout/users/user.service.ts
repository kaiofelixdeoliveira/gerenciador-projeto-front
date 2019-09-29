import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { FactoryEndpointService } from '../../shared/services/factory-endpoint.service';

@Injectable({ providedIn: 'root' })
export class UserService {

    endpointUrl:string="/api/usuario";
    
    constructor(private http: HttpClient, private factoryEndpointService: FactoryEndpointService) { }




    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${environment.apiUrl}${this.endpointUrl}`)
            .pipe(
                retry(1),
                catchError(this.factoryEndpointService.errorHandler)
            )
    }

    // POST
    registerNewUser(data): Observable<User> {
        return this.http.post<User>(`${environment.apiUrl}${this.endpointUrl}`, JSON.stringify(data), this.factoryEndpointService.httpOptions)
            .pipe(
                retry(1),
                catchError(this.factoryEndpointService.errorHandler)
            )
    }
    /*

      // GET
      GetIssue(id): Observable<Bug> {
        return this.http.get<Bug>(this.baseurl + '/bugtracking/' + id)
        .pipe(
          retry(1),
          catchError(this.errorHandl)
        )
      }
    
      // GET
      GetIssues(): Observable<Bug> {
        return this.http.get<Bug>(this.baseurl + '/bugtracking/')
        .pipe(
          retry(1),
          catchError(this.errorHandl)
        )
      }
    
      // PUT
      UpdateBug(id, data): Observable<Bug> {
        return this.http.put<Bug>(this.baseurl + '/bugtracking/' + id, JSON.stringify(data), this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.errorHandl)
        )
      }
    
      // DELETE
      DeleteBug(id){
        return this.http.delete<Bug>(this.baseurl + '/bugtracking/' + id, this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.errorHandl)
        )
      }*/

    // Error handling
    
}