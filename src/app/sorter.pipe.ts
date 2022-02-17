import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter',
  pure: false //the default value is true
  //be aware that the following change will make sure that 
  //whenever we change data on te page, our pipe is recalculated you
  //could say. So this might lead to performance issues.
})
export class SorterPipe implements PipeTransform {

  transform(value: any) {
    return value.sort( (a,b) => a.name > b.name ? 1:-1 );
  }

}
