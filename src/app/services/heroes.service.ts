import { Injectable } from '@angular/core';
//Para poder hacer peticiones HTTP
import { Http, Headers } from "@angular/http";
//Importar el Heroe de la Interface
import { Heroe } from '../interfaces/heroe.interface';
//Para el uso de la funcion map
import 'rxjs/Rx';


@Injectable()
export class HeroesService {

  heroesURL:string = "https://heroesapp-64741.firebaseio.com/heroes.json"
  heroeURL:string = "https://heroesapp-64741.firebaseio.com/heroes/"

  constructor( private http:Http ) { }

  nuevoHeroe( heroe:Heroe ) {
    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-Type' : 'application/json'
    })

    return this.http.post( this.heroesURL, body, {headers:headers} )
          .map( res=>{    //MAP nos ayudara a transformar la data que viene
            console.log(res.json());
            return res.json();
          })
    // Tambien puede ser (cuando usamos ES6 )
    //return this.http.post( this.heroesURL, body, { headers } )
    //    .map( res=>{
    //      console.log(res.json());
    //      return res.json();
    //    })

  }

  actualizarHeroe( heroe:Heroe, key$:string ){
    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-Type' : 'application/json'
    })

    let url = `${ this.heroeURL }/${ key$ }.json`;

    return this.http.put( url, body, {headers:headers} )
          .map( res=>{    //MAP nos ayudara a transformar la data que viene
            console.log(res.json());
            return res.json();
          })
  }

  getHeroe( key$:string ){

    let url = `${ this.heroeURL }/${ key$ }.json`;
    return this.http.get( url )
      .map( res => res.json() );

  }

  getHeroes(){
    return this.http.get( this.heroesURL )
      .map( res => res.json() );
  }

  borrarHeroe( key$:string ){
    let url = `${ this.heroeURL }/${ key$ }.json`;
    return this.http.delete(url)
      .map( res=> res.json() );
  }

}
