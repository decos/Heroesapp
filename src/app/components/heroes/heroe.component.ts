import { Component, OnInit } from '@angular/core';
//Import
import { NgForm } from '@angular/forms';
//Import interface
import { Heroe } from '../../interfaces/heroe.interface';
//Import Service
import { HeroesService } from '../../services/heroes.service';
//Import Router
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  private heroe:Heroe = {
    nombre:"",
    bio:"",
    casa:"Marvel"
    //Key, no lo tengo, no tengo manera de saberlo
  }

  nuevo:boolean = false;
  id:string; //Inicializada

  constructor(private _heroesService:HeroesService,
              private router:Router,
              private route:ActivatedRoute) {
                this.route.params.subscribe( parametros =>{
                  console.log("parametros" , parametros)
                  this.id = parametros['id'];
                  if( this.id !== "nuevo" ){
                    this._heroesService.getHeroe( this.id )
                      .subscribe( heroe => this.heroe = heroe)
                  }
                })
                //Si solo fuese una instruccion
                //this.route.params.subscribe( parametros => this.id=parametros['id']);
  }

  ngOnInit() {
  }

  guardar(){
    console.log(this.heroe);

    if( this.id == "nuevo"){
      //INSERTANDO
      //Para que se dispare, debes suscribirte
      this._heroesService.nuevoHeroe(this.heroe)
        .subscribe( data =>{
            this.router.navigate(['/heroe', data.name])
        },
                    error => console.error(error));
    }else{
      //ACTUALIZANDO
      this._heroesService.actualizarHeroe(this.heroe, this.id)
        .subscribe( data =>{
            console.log(data);
        },
                    error => console.error(error));
    }
  }

  agregarNuevo( forma:NgForm ){
    //Navegar a una nueva ruta
    this.router.navigate(['/heroe', 'nuevo']);

    forma.reset({
      casa:"Marvel"
    });
  }

}
