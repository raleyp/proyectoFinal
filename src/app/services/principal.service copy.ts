import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  public tareas: Tarea[];

  private tareasUrl = 'api/heroes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    // this.tareas = [];
    this.tareas = new Array<Tarea>();
  }


  /** GET tareas from the server */
  getTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.tareasUrl)
      .pipe(
        catchError(this.handleError<Tarea[]>('getTareas', []))
      );
  }

  /**PUT: update the Tareason the server. Return the update tarea upon success */

  updateTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.put<Tarea>(this.tareasUrl, tarea, this.httpOptions)
      .pipe(
        catchError(this.handleError('updateTarea', tarea))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}