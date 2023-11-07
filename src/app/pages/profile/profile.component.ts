import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user1: User;

  verde: boolean = false;
  rojo: boolean = false;

  constructor() {

    this.user1 = new User("Ruben", "Rivas Briceño", "uncorreo123@gmail.com",
      "https://static.vecteezy.com/system/resources/previews/008/420/425/original/cute-penguin-wearing-earmuff-cartoon-icon-illustration-animal-winter-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg",
      "qwerty12");

  }

  enviar(event: Event, newName: HTMLInputElement, newLastName: HTMLInputElement,
      newEmail: HTMLInputElement, newUrl: HTMLInputElement) {
    event.preventDefault();

    if (newName.value !== "") {
      this.user1.name = newName.value;
      console.log(this.user1.name);
      this.verde = true;
      this.rojo = false;
    }

    if (newLastName.value !== "") {
      this.user1.last_name = newLastName.value;
      this.verde = true;
      this.rojo = false;
    }

    if (newEmail.value !== "") {
      this.user1.email = newEmail.value;
      this.verde = true;
      this.rojo = false;
    }

    if (newUrl.value !== "") {
      this.user1.photo = newUrl.value;
      this.verde = true;
      this.rojo = false;
    }

    if (newName.value === ""
      && newLastName.value === ""
      && newEmail.value === ""
      && newUrl.value === "") {
      this.verde = false;
      this.rojo = true;
    }

  }

}
