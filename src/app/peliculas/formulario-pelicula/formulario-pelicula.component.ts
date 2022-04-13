import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multipleSelectorModel } from 'src/app/utilidades/selector-multiple/multipleSelectorModel';
import { peliculaCreacioDTO, peliculaDTO } from './pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {
  form:FormGroup
  @Output() onSubmit:EventEmitter<peliculaCreacioDTO>=new EventEmitter<peliculaCreacioDTO>();
  @Input() modelo:peliculaDTO

  generosNoSeleccionados:multipleSelectorModel[]=[
    {llave:1,valor:'Drama'},
    {llave:2,valor:'Accion'},
    {llave:3,valor:'Comedia'}
  ]
  generosSeleccionados:multipleSelectorModel[]=[]

  cinesNoSeleccionados:multipleSelectorModel[]=[
    {llave:1,valor:'Sambil'},
    {llave:2,valor:'Agora'},
    {llave:3,valor:'Acropolis'}
  ]
  cinesSeleccionados:multipleSelectorModel[]=[]
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      titulo:['',{validatos:[Validators.required]}],
      resumen:[''],
      enCines:'',
      trailer:'',
      fechaLanzamiento:'',
      poster:'',
      generosId:'',
      cinesId:''

    })
    if(this.modelo!==undefined){
      this.form.patchValue(this.modelo)
    }
  }
  guardarCambios(){
    //console.log(this.generosSeleccionados)
    //crear el vector con los generosID
    const generosId=this.generosSeleccionados.map(val=>val.llave)
    this.form.get('generosId').setValue(generosId)

    const cinesId=this.cinesSeleccionados.map(val=>val.llave)
    this.form.get('cinesId').setValue(cinesId)

    this.onSubmit.emit(this.form.value)
  }
  archivoSeleccionado(archivo:File){
    this.form.get('poster').setValue(archivo);
  }
  changeMarkDown(texto){
    this.form.get('resumen').setValue(texto)
  }
}
