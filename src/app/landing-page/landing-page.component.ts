import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  peliculasCines;
  peliculasCartelera;
  
  constructor() { }

  ngOnInit(): void {
    this.peliculasCines=[{
      titulo:"pelicula 1",
      fecha: new Date(),
      precio:1000,
      poster:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/159643-tv-news-spider-man-no-way-home-image1-dryautoefj.jpg'
    },
    {
      titulo:"pelicula 2",
      fecha: new Date(),
      precio:3400,
      poster:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/159643-tv-news-spider-man-no-way-home-image1-dryautoefj.jpg'
    }
  ]
  this.peliculasCartelera=[{
    titulo:"pelicula 3",
    fecha: new Date(),
    precio:1000,
    poster:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/159643-tv-news-spider-man-no-way-home-image1-dryautoefj.jpg'
  },
  {
    titulo:"pelicula 4",
    fecha: new Date(),
    precio:3400
  },
  {
    titulo:"pelicula 5",
    fecha: new Date(),
    precio:3400
  },
  {
    titulo:"pelicula 6",
    fecha: new Date(),
    precio:3400
  },
  {
    titulo:"pelicula 6",
    fecha: new Date(),
    precio:3400
  },
  {
    titulo:"pelicula 6",
    fecha: new Date(),
    precio:3400
  },
  {
    titulo:"pelicula 6",
    fecha: new Date(),
    precio:3400
  },
  {
    titulo:"pelicula 6",
    fecha: new Date(),
    precio:3400
  },
]
  }
  manejarRated(voto:number):void{
    alert(voto)
  }

}
