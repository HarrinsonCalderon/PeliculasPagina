import { Input,Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {
  form:FormGroup
  @Input() modeloEditar:actorCreacionDTO;
  @Output() onSubmit:EventEmitter<actorCreacionDTO>=new EventEmitter<actorCreacionDTO>();

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      nombre:['',Validators.required],
      fechaNacimiento:[''],
      foto:'',
      biografia:''
    })
    //para el editar, llenar el formulario con los valores del modelo
    if(this.modeloEditar!==undefined){
      this.form.patchValue(this.modeloEditar)
    }
  }
  //para enlazar la foto con el formulario
  archivoSeleccionado(file){
    this.form.get('foto').setValue(file)
  }
  cambioEnMarkDown(texto:string){
    this.form.get('biografia').setValue(texto)
  }
  eventoSubmit(){

    this.onSubmit.emit(this.form.value)
  }
}
