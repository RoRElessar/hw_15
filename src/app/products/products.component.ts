import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  books = [
    {
      id: 1,
      name: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      image: 'https://images-na.ssl-images-amazon.com/images/I/A1A14nX52aL._AC_SY445_.jpg',
      shortDescription: 'Thousands of years before the events of the novel, the Dark Lord Sauron had forged the One Ring...',
      price: 25
    },
    {
      id: 2,
      name: 'A Song of Ice and Fire',
      author: 'J.R.R. Martin',
      image: 'https://i2.rozetka.ua/goods/12784482/100643965_images_12784482223.jpg',
      shortDescription: 'A Song of Ice and Fire takes place in a fictional world in which seasons last for years...',
      price: 50.99
    },
    {
      id: 3,
      name: 'The Chronicles of Narnia',
      author: 'C.S. Lewis',
      image: 'https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTU5OV5BMl5BanBnXkFtZTcwNjAwNzQzMw@@._V1_.jpg',
      shortDescription: 'The seven books that make up The Chronicles of Narnia are presented here in order of original publication date...',
      price: 10.99
    }
  ];

  isClicked = false;
  buttonText = 'Show details';

  openDetails() {
    this.isClicked = !this.isClicked;
    this.isClicked ? this.buttonText = 'Hide details' : this.buttonText = 'Show details';
  }

  constructor() { }

}
