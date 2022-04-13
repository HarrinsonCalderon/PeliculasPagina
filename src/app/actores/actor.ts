export interface actorCreacionDTO{
  nombre:string;
  fechaNacimiento:Date;
  foto:File;
}

//leectura de actores
export interface actorDTO{
  nombre:string;
  fechaNacimiento:Date;
  //para recibir la url de la foto
  foto:string;
}
