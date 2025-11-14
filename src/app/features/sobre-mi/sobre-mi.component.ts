import { Component, inject } from '@angular/core';
import { DatosPersonales } from '../../models/datos-personales';
import { DatosPersonalesService } from '../../services/datosPersonales/datos-personales.service';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css'
})
export class SobreMiComponent {

datosP:DatosPersonales | any;
  cargando=true;

  error: string | null = null; // Para manejar errores
    
  private datosPersonalesService = inject(DatosPersonalesService);// Angular 17: usar inject() o constructor
   ngOnInit() { // ngOnInit: Método del ciclo de vida que se ejecuta cuando el componente se inicializa
  
    // Llamada al servicio para obtener la lista de estudiantes  
 this.datosPersonalesService.obtenerDatosPersonales().subscribe({
     next: (data) => {      // FUNCIÓN next: Se ejecuta cuando la petición es EXITOSA
       this.datosP = data;
       this.cargando = false;
     },
     error: (err) => {     // FUNCIÓN error: Se ejecuta cuando la petición FALLA
       this.error = 'No se pudieron cargar los datos personales';
       this.cargando = false;      }     

       
});   

   }

}
