import { Component, OnInit } from '@angular/core';
import { peliculaCreacioDTO } from '../formulario-pelicula/pelicula';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  guardarCambios(pelicula:peliculaCreacioDTO){
   console.log(pelicula)
  }
}
