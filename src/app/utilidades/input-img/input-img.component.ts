import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

import { conversionABase64 } from '../utilidades';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {
  //emitir la imagen seleccionada
  @Output() archivoSeleccionado:EventEmitter<File>=new EventEmitter<File>()
  //para recibir la imagen para editar
  @Input() urlImagenActual:string;
  imagenBase64:string
  constructor() { }

  ngOnInit(): void {
  }
  eventoChange(event){
    //verificar la cantidad de imagenes seleccionadas

    if(event.target.files.length === undefined) {return}

    if(event.target.files.length>0){
       //obtener primer imagen
       const file:File=event.target.files[0];
       //conversion del file a base 64
       conversionABase64(file).then((value:string)=>this.imagenBase64=value).catch
       (error=>console.log('El  error',error))
      this.archivoSeleccionado.emit(file);
      //para evitar que las dos imagenes aparezcan
      this.urlImagenActual=null;
    }
  }
}
