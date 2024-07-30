import { Component } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [
    { id: 1, name: 'Obélix et sa pile de livres', image: 'figurineobelixlivres.png', price: 20.00 },
    { id: 2, name: 'Astérix', image: 'figurineasterix.png', price: 15.00},
    { id: 3, name: 'Obélix', image: 'figurineobelix.png', price: 25.00 }
  ];
  title = "Bienvenue dans l'univers d'Obélix et Astérix";

  sortOrder = 'asc';

  sortByPriceAsc() {
    this.sortOrder = 'asc';
    this.products.sort((a, b) => a.price - b.price);
  }

  sortByPriceDesc() {
    this.sortOrder = 'desc';
    this.products.sort((a, b) => b.price - a.price);
  }
  trackProductById(product: any): number {
    return product.id;
  }

  sortByName() {
    this.products.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  
  sortByNameDesc() {
    this.products.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      } else if (a.name > b.name) {
        return -1;
      } else {
        return 0;
      }
    });
  }


  

     
    };


