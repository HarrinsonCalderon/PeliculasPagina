import { Component, Input, OnInit } from '@angular/core';
import { multipleSelectorModel } from './multipleSelectorModel';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.css']
})
export class SelectorMultipleComponent implements OnInit {
  @Input() seleccionados:multipleSelectorModel[]=[]
  @Input() noseleccionados:multipleSelectorModel[]=[]
  constructor() { }

  ngOnInit(): void {
  }
  seleccionar(item:multipleSelectorModel,index:number){
    this.seleccionados.push(item)
    this.noseleccionados.splice(index,1)
  }
  deseleccionar(item:multipleSelectorModel,index:number){
    this.noseleccionados.push(item)
    this.seleccionados.splice(index,1)
  }
  seleccionarTodo(){
    this.seleccionados.push(...this.noseleccionados)
    this.noseleccionados=[]
  }
  deseleccionarTodo(){
    this.noseleccionados.push(...this.seleccionados)
    this.seleccionados=[]
  }
}
