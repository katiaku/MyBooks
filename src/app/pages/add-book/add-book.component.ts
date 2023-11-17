import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Response } from 'src/app/models/response';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent {

  public message: string;

  constructor(private apiService: BooksService,
    private toast: ToastrService) {
    this.message = null;
  }

  agregar(event: Event, newTitulo: HTMLInputElement, newTipo: HTMLInputElement,
    newAutor: HTMLInputElement, newPrecio: HTMLInputElement, newPhoto: HTMLInputElement,
    newIDLibro: HTMLInputElement, newIDUsuario: HTMLInputElement) {

    event.preventDefault();

    let book: Book = new Book(newTitulo.value, newTipo.value, newAutor.value, parseInt(newPrecio.value),
      newPhoto.value, parseInt(newIDLibro.value), parseInt(newIDUsuario.value));

    this.apiService.add(book).subscribe((resp: Response) => {
      console.log(resp);
        if (!resp.error) {
          this.toast.success('Libro insertado satisfactoriamente', '', {positionClass: 'my-toast-position'});
          newTitulo.value = '';
          newTipo.value = '';
          newAutor.value = '';
          newPrecio.value = '';
          newPhoto.value = '';
          newIDLibro.value = '';
          newIDUsuario.value = '';
          this.apiService.book = null;
        } else {
          this.toast.error('El libro ya existe', '', {positionClass: 'my-toast-position'});
        }
    });
  }
}
