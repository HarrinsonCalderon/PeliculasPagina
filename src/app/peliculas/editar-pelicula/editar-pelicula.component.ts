import { Component, OnInit } from '@angular/core';
import { peliculaCreacioDTO, peliculaDTO } from '../formulario-pelicula/pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {
  modelo:peliculaDTO={
    titulo:'spiderman',
    resumen:'resumen spiderman',
    enCines:true,
    fechaLanzamiento:new Date(),
    trailer:'trailer',
    poster:'https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG'
  }
  constructor() { }

  ngOnInit(): void {
  }
  guardarCambios(pelicula:peliculaCreacioDTO){    
    console.log(pelicula)
  }
}
