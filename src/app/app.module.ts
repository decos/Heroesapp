import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Import
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
//Import
import { APP_ROUTING } from './app.routes';
//Import Services
import { HeroesService } from './services/heroes.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    FormsModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
