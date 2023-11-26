import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  book: Book;
  books: Book[];

  private url = "http://localhost:3000/book";

  constructor(private http: HttpClient) {}

  public getAll(id_user: number): Observable<Object> {
    return this.http.get(`${this.url}s?id_user=${id_user}`);
  }

  public getByBookId(id_book: number, id_user: number): Observable<Object> {
    return this.http.get(`${this.url}?id_book=${id_book}&id_user=${id_user}`);
  }

  public add(book: Book): Observable<Object> {
    return this.http.post(`${this.url}s`, book);
  }

  public edit(book: Book): Observable<Object> {
    return this.http.put(`${this.url}s`, book);
  }

  public delete(book: Book): Observable<Object> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: { id_book: book.id_book },
    };
    return this.http.delete(`${this.url}s`, options);
  }

}
