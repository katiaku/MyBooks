export class User {

  name: string;
  last_name: string;
  email: string;
  photo: string;
  password: string;
  id_user: string;

  constructor(name: string, last_name: string, email: string,
    photo: string, password: string) {
      this.name = name;
      this.last_name = last_name;
      this.email = email;
      this.photo = photo;
      this.password = password;
    }

}
