import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  book: Book;

  constructor(public booksService: BooksService) {}

  update(event: Event, newTitulo: HTMLInputElement, newTipo: HTMLInputElement,
    newAutor: HTMLInputElement, newPrecio: HTMLInputElement, newPhoto: HTMLInputElement,
    newIDLibro: HTMLInputElement, newIDUsuario: HTMLInputElement) {

    event.preventDefault();

    this.book = new Book(newTitulo.value, newTipo.value, newAutor.value, parseInt(newPrecio.value),
      newPhoto.value, parseInt(newIDLibro.value), parseInt(newIDUsuario.value));

    this.booksService.edit(this.book);

  }

}
