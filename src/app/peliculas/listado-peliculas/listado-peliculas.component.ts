import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
  //para poder enviar pelicular desde otro lugar osea componente externo, de un padre a hijo
  @Input() 
  peliculas;
 
  constructor() { }

  ngOnInit(): void {
    
  }
  Remover(indicePelicula){
    this.peliculas.splice(indicePelicula,1);
  }
}
