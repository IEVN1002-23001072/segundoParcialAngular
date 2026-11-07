import { Pipe, PipeTransform } from '@angular/core';
import { MaestrosUtl } from './maestros';

@Pipe({
  name: 'maestroFilter',
  standalone: true,
})
export class MaestrosFilterPipe implements PipeTransform {
  transform(value: MaestrosUtl[] , args: string): MaestrosUtl[] {
    let filter:string = args?args.toLocaleLowerCase():'';

    return filter?value.filter((maestro:MaestrosUtl)=>
      maestro.nombre.toLocaleLowerCase().indexOf(filter)!==-1):value;
  }
}
