import { Component} from '@angular/core';
import { FormsModule} from '@angular/forms';

interface Producto {
  id: number;
  nombre: string;
  precio: number;

}

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  usuarioLogueado: boolean = true;
  productos: Producto[] = [
    {id: 1, nombre: 'guitarra', precio: 900000},
    {id: 2, nombre: 'camiseta', precio: 35000},
    {id: 3, nombre: 'collar', precio: 200000},
    {id: 4, nombre: 'pelota', precio: 15000},
  ];

  click() {
    this.usuarioLogueado = !this.usuarioLogueado;
  }

  vaciarLista(){
    this.productos = [];
  }

  filtro: string = '';

  get productosFiltrados(): Producto[] {
    return this.productos.filter(p => p.nombre.toLowerCase().includes(this.filtro.toLowerCase())); //return porque nos tiene que devolver el producto a filtrar.
    // esto sirve para buscar o filtrar objetos de un array.

  }

  categoria: string= '';

  
}
