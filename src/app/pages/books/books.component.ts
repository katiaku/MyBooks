import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  books: Book[] = [];
  book1: Book;
  book: Book;

  constructor() {

    this.book1 = new Book(
      "Clean Code",
      "Tapa blanda",
      "Robert C. Martin",
      50,
      "https://m.media-amazon.com/images/I/51E2055ZGUL._SY522_.jpg"
    );

    this.books.push(this.book1);

  }

  enviar(event: Event, newTitulo: HTMLInputElement, newTipo: HTMLInputElement,
      newAutor: HTMLInputElement, newPrecio: HTMLInputElement, newPhoto: HTMLInputElement,
      newIDLibro: HTMLInputElement, newIDUsuario: HTMLInputElement) {

    event.preventDefault();

    this.book = new Book(newTitulo.value, newTipo.value, newAutor.value, parseInt(newPrecio.value),
      newPhoto.value, parseInt(newIDLibro.value), parseInt(newIDUsuario.value));

    this.books.push(this.book);

  }

}
