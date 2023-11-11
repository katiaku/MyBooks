import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent {

  book: Book;

  constructor(public booksService: BooksService) {}

  enviar(event: Event, newTitulo: HTMLInputElement, newTipo: HTMLInputElement,
    newAutor: HTMLInputElement, newPrecio: HTMLInputElement, newPhoto: HTMLInputElement,
    newIDLibro: HTMLInputElement, newIDUsuario: HTMLInputElement) {

    event.preventDefault();

    this.book = new Book(newTitulo.value, newTipo.value, newAutor.value, parseInt(newPrecio.value),
        newPhoto.value, parseInt(newIDLibro.value), parseInt(newIDUsuario.value));

    this.booksService.add(this.book);

  }

}
