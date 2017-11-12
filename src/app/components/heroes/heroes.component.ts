import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];

  constructor(private _heroesService:HeroesService) {

    //subscribe me devolvera la data que viene de mi servicio
    this._heroesService.getHeroes()
      .subscribe( data => {
        console.log(data);
        //Convertir un objeto en un arreglo
        /*
        for(let key$ in data){

          let h = data[key$];
          h.key$ = key$
          this.heroes.push( data[key$] );
        }
        console.log( this.heroes );
        */

        //Crear un PIPE para trabajar esto
        this.heroes = data;

      })
  }

  ngOnInit() {
  }

  borrarHeroe( key$:string ){
    this._heroesService.borrarHeroe(key$)
      .subscribe( respuesta=> {
        //console.log(respuesta);
        if ( respuesta ){
          console.log(respuesta);
        } else{
          //todo bien
          delete this.heroes[key$];
        }
      })
  }

}
