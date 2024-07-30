import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByNamePipeTs'
})
export class FilterByNamePipeTsPipe implements PipeTransform {

  transform(items: any[], name: string): any[] {
    if (!items) return [];
    if (!name) return items;

    return items.filter(item => {
      return item.name.toLowerCase().includes(name.toLowerCase());
    });
  }

}
