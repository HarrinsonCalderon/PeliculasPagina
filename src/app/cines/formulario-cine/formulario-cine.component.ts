import { Input,Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coordenada } from 'src/app/utilidades/mapa/coordenada';

import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css']
})
export class FormularioCineComponent implements OnInit {
  form:FormGroup
  @Input() modelo:cineCreacionDTO;
  @Output() guardarCambios:EventEmitter<cineCreacionDTO>=new EventEmitter<cineCreacionDTO>();
  coordenadaInicial:coordenada[]=[]
  constructor(private formBuilder:FormBuilder) {

  }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      nombre:['',{validators:[Validators.required]}],
      latitud:['',{validators:[Validators.required]}],
      longitud:['',{validators:[Validators.required]}],
    })
    if(this.modelo!==undefined){
      this.form.patchValue(this.modelo)
      this.coordenadaInicial.push({latitud:this.modelo.latitud,longitud:this.modelo.longitud})
    }
  }
  coordenadaSeleccionada(coordenada:coordenada){
    this.form.patchValue(coordenada)
    //this.coordenadaInicial.push({latitud:this.modelo.latitud,longitud:this.modelo.longitud})

  }
  onSubmit(){
    this.guardarCambios.emit(this.form.value);
  }
}
