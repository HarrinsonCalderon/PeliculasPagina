import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent implements OnInit {
  modelo:cineDTO={nombre:'Sambil',latitud:3.535352145400878,longitud:-74.20166015625001}
  constructor() { }

  ngOnInit(): void {
  }
  guardarCambios(cine:cineCreacionDTO){
    //console.log(cine)
  }
}
