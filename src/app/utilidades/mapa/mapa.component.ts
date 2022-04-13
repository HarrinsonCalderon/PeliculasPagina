import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';
import { icon, latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { coordenada } from './coordenada';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  @Output() coordenadaSeleccionada:EventEmitter<coordenada>=new EventEmitter<coordenada>()
  @Input() coordenadaIniciales:coordenada[]=[]
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(3.535352145400878, -74.20166015625001)
  };
  capas:Marker<any>[]=[]
  constructor() { }

  ngOnInit(): void {
    this.capas=this.coordenadaIniciales.map(valor=>marker([valor.latitud,valor.longitud]))
  }
  manejarClick(event:LeafletMouseEvent){
    const latitud=event.latlng.lat
    const longitud=event.latlng.lng
    this.capas=[]
    this.capas.push(marker([latitud,longitud],{
      icon:icon({
        iconSize:[25,51],
        iconAnchor:[13,41],
        iconUrl:'marker-icon.png',
        iconRetinaUrl:'marker-icon-2x.png',
        shadowUrl:'assets/marker-shadow.png'
      })
    }))
    //console.log(latitud,longitud)
    this.coordenadaSeleccionada.emit({latitud:latitud,longitud:longitud})
  }
}
