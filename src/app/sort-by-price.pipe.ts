import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './home/home.component'; // import the Product interface


@Pipe({
  name: 'SortByPrice',
  pure: false // <--- add this
})
export class SortByPricePipe implements PipeTransform {
  

  transform(products: Product[], sortOrder: string): Product[] {
    if (sortOrder === 'asc') {
      return products.sort((a: Product, b: Product) => {
        if (a.price < b.price) { return -1; }
        else if (a.price > b.price) { return 1; }
        else return 0;
      });
    } else if (sortOrder === 'desc') {
      return products.sort((a: Product, b: Product) => {
        if (a.price > b.price) { return -1; }
        else if (a.price < b.price) { return 1; }
        else return 0;
      });

    } else {
      
      // return an empty array or the original products array
      return products; // or return [];
    }
    }
  }


