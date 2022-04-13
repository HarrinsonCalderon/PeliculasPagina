import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {
  modelo:cineDTO={nombre:'Sambil',latitud:3.535352145400878,longitud:-74.20166015625001}
  constructor() { }



  ngOnInit(): void {
  }
  guardarCambios(cine:cineCreacionDTO){
    //console.log(cine)
  }

}
