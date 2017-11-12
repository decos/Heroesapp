import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];
  loading:boolean = true;

  constructor(private _heroesService:HeroesService) {

    //subscribe me devolvera la data que viene de mi servicio
    this._heroesService.getHeroes()
      .subscribe( data => {
        //Crear un PIPE para trabajar esto
        setTimeout( ()=>{
          this.loading = false;
          this.heroes = data;
        }, 2000 )
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
