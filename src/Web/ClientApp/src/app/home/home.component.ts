import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { IndexGridComponent } from '../shared/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [ButtonModule, IndexGridComponent]
})
export class HomeComponent {
  columnas = [
    { field: 'nombre', header: 'Nombre' },
    { field: 'edad', header: 'Edad' },
    { field: 'ciudad', header: 'Ciudad' }
  ];

  datos = [
    { nombre: 'Juan', edad: 30, ciudad: 'Madrid' },
    { nombre: 'Ana', edad: 25, ciudad: 'Barcelona' },
    { nombre: 'Pedro', edad: 35, ciudad: 'Valencia' }
  ];

  editar(item: any) {
    console.log('Editar:', item);
    // Aquí tu lógica para editar
  }

  eliminar(item: any) {
    console.log('Eliminar:', item);
    // Aquí tu lógica para eliminar
  }
}
