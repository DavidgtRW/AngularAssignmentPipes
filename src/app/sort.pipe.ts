import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false //the default value is true
  //be aware that the following change will make sure that 
  //whenever we change data on te page, our pipe is recalculated you
  //could say. So this might lead to performance issues.
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string) {
    return value.sort((a, b) => {
      if(a[propName] > b[propName]){
        return 1;
      } else {
        return -1;
      }
    });
  }

}
