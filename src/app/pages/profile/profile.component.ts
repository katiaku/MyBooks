import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public user: User;

  constructor(private apiService: UsersService,
    private toast: ToastrService) {

    this.user = this.apiService.user;

  }

  modificar(newName: HTMLInputElement, newLastName: HTMLInputElement,
      newEmail: HTMLInputElement, newPhoto: HTMLInputElement) {

    let user: User = new User(newName.value, newLastName.value, newEmail.value, newPhoto.value);

    console.log(user);

    this.apiService.edit(user).subscribe((resp: any) => {
      console.log(resp);
        if (!resp.error) {
          this.toast.success('Datos modificados satisfactoriamente', '', {positionClass: 'my-toast-position'});
          newName.value = '';
          newLastName.value = '';
          newEmail.value = '';
          newPhoto.value = '';
          this.user = user;
        } else {
          this.toast.error('Error al modificar el usuario', '', {positionClass: 'my-toast-position'});
        }
    });

  }

}
