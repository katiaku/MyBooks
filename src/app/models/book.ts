export class Book {

  title: string;
  type: string;
  author: string;
  price: number;
  photo: string;
  id_book: number;
  id_user: number;

  constructor(title: string, type: string, author: string,
    price: number, photo: string, id_book: number = 0,
    id_user: number = 0) {
      this.title = title;
      this.type = type;
      this.author = author;
      this.price = price;
      this.photo = photo;
      this.id_book = id_book;
      this.id_user = id_user;
    }

}
