import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() bookPadre: Book;
  @Input() isEven: boolean;
  @Output() eventoBook = new EventEmitter<Book>();

  constructor() {

  }

  delete() {

    let bookParaBorrar = this.bookPadre;

    this.eventoBook.emit(bookParaBorrar);

  }

}
