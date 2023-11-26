import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users.service';
import { Response } from 'src/app/models/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public user: User;

  constructor(private apiService: UsersService,
    private toast: ToastrService, private router: Router) {
    this.user = new User();
  }

  sessionLogin(form: NgForm) {
    console.log(form.value)
    const user = form.value;
    console.log(user);

    this.apiService.login(user).subscribe((resp: any) => {
        if (!resp.error) {
          console.log(resp);
          this.apiService.setLoggedIn(true);
          this.apiService.user = resp;
          this.toast.success('Usuario logeado satisfactoriamente', '', { positionClass: 'my-toast-position' });
          this.router.navigate(['/books']);
        } else {
          this.toast.error('Datos introducidos incorrectos', '', { positionClass: 'my-toast-position' });
        }
    });
  }

}
