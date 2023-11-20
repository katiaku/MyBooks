import { Component, ɵbypassSanitizationTrustStyle } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Response } from 'src/app/models/response';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {

  constructor(public apiService: BooksService,
    private toast: ToastrService) {
    this.apiService.book = null;
    this.apiService.books = null;
  }

  ngOnInit(): void {
    this.mostrarTodos();
  }

  mostrarUno(searchId: HTMLInputElement) {
    const id_book = parseInt(searchId.value);

    if (!isNaN(id_book)) {
      this.apiService.getOne(id_book).subscribe((resp: Response) => {
        console.log(resp);
        if (resp.error) {
          this.toast.warning('El ID no se ha encontrado', '', {positionClass: 'my-toast-position'});
          this.mostrarTodos();
        } else {
          this.apiService.books = [resp.data];
        }
      });
    } else {
      this.apiService.books = [];
    }
  }

  mostrarTodos() {
    this.apiService.getAll().subscribe((resp: Response) => {
      console.log(resp.data);
      if (resp.error)
        this.toast.warning('No hay libros', '', {positionClass: 'my-toast-position'});
      else
        this.apiService.books = resp.data;
    });
  }

  eliminar(bookParaBorrar: Book) {
    this.apiService.delete(bookParaBorrar.id_book).subscribe((resp: Response) => {
      console.log(resp);
      if (resp.error)
        alert('Error al borrar el libro');
      else
        this.apiService.book = null;
        this.apiService.books = resp.data;
    });
  }

}
