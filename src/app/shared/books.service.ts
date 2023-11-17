import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  book: Book;
  books: Book[];

  private url = "http://localhost:3000/books";

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Object> {
    return this.http.get(this.url);
  }
  public getOne(id_book: number): Observable<Object> {
    return this.http.get(`${this.url}/${id_book}`);
  }
  public add(book: Book): Observable<Object> {
    return this.http.post(this.url, book);
  }
  public edit(book: Book): Observable<Object> {
    return this.http.put(`${this.url}/${book.id_book}`, book);
  }
  public delete(id_book: number): Observable<Object> {
    return this.http.delete(`${this.url}/${id_book}`);
  }

}
