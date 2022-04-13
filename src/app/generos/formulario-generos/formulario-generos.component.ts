import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/Validadores/primeraLetraMayuscula';

import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-generos',
  templateUrl: './formulario-generos.component.html',
  styleUrls: ['./formulario-generos.component.css']
})
export class FormularioGenerosComponent implements OnInit {

  form:FormGroup;
  @Output() Onsubmit:EventEmitter<generoCreacionDTO>=new EventEmitter<generoCreacionDTO>();
  @Input() modelo:generoCreacionDTO;
  constructor(private router:Router,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      nombre:['',{
        validators:[
          Validators.required,
          Validators.minLength(4),
          primeraLetraMayuscula()
        ]
      }]
    })
    //llenar el formulario con el modelo si es para editarlo
    if(this.modelo!==undefined){

      this.form.patchValue(this.modelo);
   }
  }
  obtenerErrorCampoNombre(){
    var campo=this.form.get('nombre');
    if(campo.hasError('required')){
      return 'El campo nombre es requerido'
    }
    if(campo.hasError('minlength')){
      return 'La longitud minima del nombre es de 4 caracteres'
    }
    if(campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje
    }
    return '';
  }


  guardarCambios(){
    //guardar cambios
    console.log(this.form.value)

    this.Onsubmit.emit(this.form.value);
  }
}
