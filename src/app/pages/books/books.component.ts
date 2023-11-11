import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  // book1: Book;
  book: Book;

  constructor(public booksService: BooksService) {

    // this.book1 = new Book(
    //   "Clean Code",
    //   "Tapa blanda",
    //   "Robert C. Martin",
    //   50,
    //   "https://m.media-amazon.com/images/I/51E2055ZGUL._SY522_.jpg"
    // );

    // this.booksService.add(this.book1);

  }

  deleteBook(bookParaBorrar: Book) {
    this.booksService.delete(bookParaBorrar);
  }

  searchBook(searchId: HTMLInputElement) {
    this.book = this.booksService.getOne(parseInt(searchId.value));
  }

}
