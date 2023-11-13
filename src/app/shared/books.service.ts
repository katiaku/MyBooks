import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book[];

  constructor(private toastr: ToastrService) {
    this.books = [];
  }

  public getAll(): Book[] {
    return this.books;
  };

  public getOne(id_book: number): Book {
    const book = this.books.find((book) => book.id_book === id_book);
    if(book) {
      return book;
    } else {
      this.toastr.error('El ID no se ha encontrado', '', {
        positionClass: 'my-toast-position'
      });
    }
  };

  public add(book: Book): void {
    this.books.push(book);
    this.toastr.success('El libro está añadido', '', {
      positionClass: 'my-toast-position'
    });
  };

  public edit(updatedBook: Book): boolean {

    let index = this.books.findIndex((book) => book.id_book === updatedBook.id_book);

    if (index !== -1) {
      this.books[index].title = updatedBook.title;
      this.books[index].type = updatedBook.type;
      this.books[index].author = updatedBook.author;
      this.books[index].price = updatedBook.price;
      this.books[index].photo = updatedBook.photo;
      this.books[index].id_book = updatedBook.id_book;
      this.books[index].id_user = updatedBook.id_user;

      this.toastr.success("El libro está modificado", '', {
        positionClass: 'my-toast-position'
      });
      return true;

    } else {
      this.toastr.error("El libro no se ha encontrado", '', {
        positionClass: 'my-toast-position'
      });
      return false;
    }

  };

  public delete(book: Book): boolean {
    let index: number = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

}
