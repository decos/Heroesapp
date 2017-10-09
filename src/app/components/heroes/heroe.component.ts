import { Component, OnInit } from '@angular/core';
//Import
import { NgForm } from '@angular/forms';
//Import interface
import { Heroe } from '../../interfaces/heroe.interface';
//Import Service
import { HeroesService } from '../../services/heroes.service';
//Import Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:Heroe = {
    nombre:"",
    bio:"",
    casa:"Marvel"
    //Key, no lo tengo, no tengo manera de saberlo
  }

  constructor(private _heroesService:HeroesService,
              private router:Router) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.heroe);

    //Para que se dispare, debes suscribirte
    this._heroesService.nuevoHeroe(this.heroe)
      .subscribe( data =>{
          this.router.navigate(['/heroe', data.name])
      },
                  error => console.error(error));
  }

}
