import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Response } from 'src/app/models/response';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {

  constructor(public apiService: BooksService, public apiServiceUsers: UsersService,
    private toast: ToastrService) {
    this.apiService.book = null;
    this.apiService.books = null;
  }

  ngOnInit(): void {
    this.showAllBooks(this.apiServiceUsers.user.id_user);
  }

  showAllBooks(id_user: number) {
    this.apiService.getAll(id_user).subscribe((resp: any) => {
      console.log(resp);
      if (resp.error || resp.length <= 0)
        this.toast.warning('No hay libros', '', {positionClass: 'my-toast-position'});
      else
        this.apiService.books = resp;
    });
  }

  buscarPorIdDelLibro(searchId: HTMLInputElement, id_user: number) {
    const id_book = parseInt(searchId.value);
    console.log(id_book);
    console.log(id_user);

    if (!isNaN(id_book)) {
      this.apiService.getByBookId(id_book, id_user).subscribe((resp: any) => {
        console.log(resp);
        if (resp.error || resp.length == 0) {
          this.toast.warning('El ID no se ha encontrado', '', {positionClass: 'my-toast-position'});
        } else {
          this.apiService.books = resp;
        }
      });
    } else {
      this.apiService.books = [];
    }
  }

  eliminar(bookParaBorrar: Book) {
    this.apiService.delete(bookParaBorrar).subscribe((resp: Response) => {
      console.log(resp);
      if (resp.error)
        this.toast.error('Se ha producido un error', '', {positionClass: 'my-toast-position'});
      else
        this.apiService.book = null;
        this.apiService.books = [...this.apiService.books.filter((book) => book.id_book !== bookParaBorrar.id_book)];
        this.toast.success('Libro borrado satisfactoriamente', '', {positionClass: 'my-toast-position'});
    });
  }

}
