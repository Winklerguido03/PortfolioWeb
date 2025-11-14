import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { DatosPersonales } from '../../models/datos-personales';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {

   constructor(private http:HttpClient) { }
  
    obtenerDatosPersonales(): Observable<DatosPersonales> {
      return this.http.get<DatosPersonales>(environment.datosPersonalesUrl)
        .pipe(
          catchError((error: any) => {
            console.error('Error al cargar el archivo JSON', error);
            return throwError(() => new Error('No se pudo cargar el archivo JSON'));
          })
        );
    }
}
