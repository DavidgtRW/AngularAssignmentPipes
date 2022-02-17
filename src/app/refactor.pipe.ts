import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refactor'
})
export class RefactorPipe implements PipeTransform {

  transform(value: any) {
    console.log(value);
    let instanceType = 'TYPE: '
    switch(value){
      case 'small':{
        instanceType = instanceType + 'S';
        break;
      }
      case 'large':{
        instanceType = instanceType + 'L';
        break;
      }
      case 'medium':{
        instanceType = instanceType + 'M';
        break;
      }
      default: {
        break;
      }
    }
    return instanceType;
  }

}
