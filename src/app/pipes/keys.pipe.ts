import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false //Estar pendiente del ciclo de cambios que haga angular
})
export class KeysPipe implements PipeTransform {

  //transform(value: any, args?: any): any {
  transform(value: any): any {
    let keys = [];
    for ( let key in value) {
      keys.push(key);
    }

    return keys;
  }

}
