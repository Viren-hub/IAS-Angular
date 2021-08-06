import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortData'
})
export class SortDataPipe implements PipeTransform {

  transform(value:Array<string>, args:any[]): any[] {
    const sortField=args[0];
    value.sort((a:any , b:any) => {
      if(a[sortField] < b[sortField]){
        return -1;
      }
      else if(a[sortField] > b[sortField]){
        return 1;
      }
      else{
        return 0;
      }

    });
    return value;  
  }

}
