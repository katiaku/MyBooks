import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/shared/users.service';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})

export class FormRegisterComponent {

  public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private apiService: UsersService,
    private toast: ToastrService) {
    this.buildForm();
  }

  public register() {
    const user = this.myForm.value;
    console.log(user);

    this.apiService.register(user).subscribe((resp: Response) => {
      console.log(resp);
        if (!resp.error) {
          this.toast.success('Usuario creado satisfactoriamente', '', { positionClass: 'my-toast-position' });
        } else {
          this.toast.error('El usuario ya existe', '', { positionClass: 'my-toast-position' });
        }
    });
  }

  private buildForm() {
    const minPasswordLength = 8;

    this.myForm = this.formBuilder.group({
      name: [, Validators.required],
      last_name: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      photo: [, Validators.required],
      password: [, [Validators.required, Validators.minLength(minPasswordLength)]],
      confirm: [, [Validators.required, this.checkPasswords]]
    });

  }

  private checkPasswords(control: AbstractControl) {

    let resultado = { matchPassword: true };

    if (control.parent?.value.password === control.value) {
      resultado = null;
    }

    return resultado;

  }

}
