import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ref'
})
export class RefPipe implements PipeTransform {

  transform(value: number): string {
    let result: string;
    result = "Ref-" + value;
    return result;
  }

}
