import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyectos } from '../../models/proyectos';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http:HttpClient) { }

  obtenerProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(environment.proyectosUrl)
      .pipe(
        catchError((error: any) => {
          console.error('Error al cargar el archivo JSON', error);
          return throwError(() => new Error('No se pudo cargar el archivo JSON'));
        })
      );
  }
}
