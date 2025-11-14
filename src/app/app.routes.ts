import { Routes } from '@angular/router';
import { InicioComponent } from './features/inicio/inicio.component';
import { SobreMiComponent } from './features/sobre-mi/sobre-mi.component';
import { MisProyectosComponent } from './features/mis-proyectos/mis-proyectos.component';
import { ContactoComponent } from './features/contacto/contacto.component';

export const routes: Routes = [
    {path:'',component:InicioComponent},
    {path:'inicio',component:InicioComponent},
    {path:'sobreMi',component:SobreMiComponent},
    {path:'misProyectos',component:MisProyectosComponent},
    {path:'contacto',component:ContactoComponent},
];
