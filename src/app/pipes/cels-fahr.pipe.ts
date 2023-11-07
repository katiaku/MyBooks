import { Pipe, PipeTransform } from '@angular/core';
import { Temperatura } from '../models/temperatura';

@Pipe({
  name: 'celsFahr'
})
export class CelsFahrPipe implements PipeTransform {

  transform(value: Temperatura, sistema: string): string {
    let result: string;

    if ((sistema.toLowerCase() === "celcius"
      || sistema === "&deg;C")
      || (value.unidad.toLowerCase() === "celcius"
      || value.unidad === "&deg;C")) {
      let fahrenheit: number = value.valor * (9/5) + 32;
      result = fahrenheit + "&deg;F";
      return result;

    } else if ((sistema.toLowerCase() === "fahrenheit"
      || sistema === "&deg;F")
      || (value.unidad.toLowerCase() === "celcius"
      || value.unidad === "&deg;C")) {
      let celsius: number = (value.valor - 32) * (5/9);
      result = celsius + "&deg;C";
      return result;
    }

  }

}
