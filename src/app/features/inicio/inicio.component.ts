import { Component, inject, OnInit } from '@angular/core';
import { Proyectos } from '../../models/proyectos';
import { ProyectosService } from '../../services/proyectos/proyectos.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{

  proyectos:Proyectos[]=[];
  cargando=true;

  error: string | null = null; // Para manejar errores
    
  private proyectosService = inject(ProyectosService);// Angular 17: usar inject() o constructor
   ngOnInit() { // ngOnInit: Método del ciclo de vida que se ejecuta cuando el componente se inicializa
  
    // Llamada al servicio para obtener la lista de estudiantes  
 this.proyectosService.obtenerProyectos().subscribe({
     next: (data) => {      // FUNCIÓN next: Se ejecuta cuando la petición es EXITOSA
       this.proyectos = data;
       this.cargando = false;
     },
     error: (err) => {     // FUNCIÓN error: Se ejecuta cuando la petición FALLA
       this.error = 'No se pudieron cargar los Proyectos.';
       this.cargando = false;      }     

       
});   

   }

}
