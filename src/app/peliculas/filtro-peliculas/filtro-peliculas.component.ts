import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {
  form:FormGroup
  generos:any=[ {id:1,nombre:'Drama'},
  {id:2,nombre:'Comedia'},
  {id:3,nombre:'Accion'}]
  peliculas:any=[
    {titulo:'spiderman',enCines:false,proximosExtrenos:true,generos:[1,2],poster:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/159643-tv-news-spider-man-no-way-home-image1-dryautoefj.jpg'},
    {titulo:'moana',enCines:true,proximosExtrenos:false,generos:[3],poster:'https://www.gamerfocus.co/wp-content/uploads/2016/07/moana-movie.jpg'},
    {titulo:'inception',enCines:true,proximosExtrenos:false,generos:[1,3],poster:'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'},
  ]
  peliculasOriginal=this.peliculas

  constructor(private formBuilder:FormBuilder,
    private location:Location,
    private activateRouter:ActivatedRoute,) {

  }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      titulo:'',
      generoId:0,
      proximosExtrenos:false,
      enCines:false

    })
    this.leerValoresUrl();
    this.buscarPelicula(this.form.value)
    //cada vez que pase algo en el formulario, se dispara el evento y lo utilizo
    this.form.valueChanges.subscribe(valores=>{
      // console.log(this.form.value)
      //para que siempre se actualice
      this.peliculas=[]
      this.peliculasOriginal.forEach(element => {
          this.peliculas.push(element)
      });
      //console.log(valores)
      this.buscarPelicula(valores)
      //query string
      this.escribirParametrosUrl()
    })
  }
  private leerValoresUrl(){
    var objeto:any={}
    objeto.titulo=this.activateRouter.snapshot.paramMap.get("titulo");
    objeto.generoId=this.activateRouter.snapshot.paramMap.get("titulo");
    objeto.proximosExtrenos=Number(this.activateRouter.snapshot.paramMap.get("titulo"));
    objeto.enCines=this.activateRouter.snapshot.paramMap.get("titulo");
    this.form.patchValue(objeto);
  }
  //para hacer el query string
  private escribirParametrosUrl(){
    var queryString=[]
    var valoresFormulario=this.form.value
    if(valoresFormulario.titulo){
      queryString.push('titulos='+valoresFormulario.titulo)
    }
    if(valoresFormulario.generoId!='0'){
      queryString.push('generoId='+valoresFormulario.generoId)
    }
    if(valoresFormulario.proximosExtrenos){
      queryString.push('proximosExtrenos='+valoresFormulario.proximosExtrenos)
    }
    if(valoresFormulario.enCines){
      queryString.push('enCines='+valoresFormulario.enCines)
    }
    //reescribir la url
    this.location.replaceState('peliculas/buscar',queryString.join('$'));
  }
  buscarPelicula(valores:any){
    //si pasa algo en el titulo
    if(valores.titulo){
     for(let i=0;i<this.peliculas.length;i++)
      if(this.peliculas[i].titulo.indexOf(valores.titulo)<0)
        this.peliculas.splice(i,1)
    }
    if(valores.generoId){
      this.peliculas=this.peliculas.filter(peliculas=>peliculas.generos.indexOf(valores.generoId)!==-1)
    }
    if(valores.proximosExtrenos){
      this.peliculas=this.peliculas.filter(peliculas=>peliculas.proximosExtrenos)
    }
    if(valores.enCines){
      this.peliculas=this.peliculas.filter(peliculas=>peliculas.enCines)
    }
  }
  limpiar(){
    this.form.reset()
  }
}
