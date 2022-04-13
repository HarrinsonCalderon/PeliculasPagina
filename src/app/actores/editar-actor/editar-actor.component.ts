import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {
  modelo:actorDTO={
    nombre:'felipe',
    fechaNacimiento:new Date(),
    foto:'https://static.cdn.cadena3.com/admin/playerswf/fotos/ARCHI_888692.jpg'
  }

  constructor(private activeRoute:ActivatedRoute) {

  }
  id
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params=>{
      this.id=this.activeRoute.snapshot.paramMap.get("id");
      //alert(this.id)
    });
  }
  guardarCambios(actor:actorCreacionDTO){
    console.log(actor)
  }

}
