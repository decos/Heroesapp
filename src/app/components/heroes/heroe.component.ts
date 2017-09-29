import { Component, OnInit } from '@angular/core';
//Import
import { NgForm } from '@angular/forms';
//Import interface
import { Heroe } from '../../interfaces/heroe.interface';

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

  constructor() { }

  ngOnInit() {
  }

}
