import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})

export class FormRegisterComponent {

  public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  public register() {
    const user = this.myForm.value;
    console.log(user);
  }

  private buildForm() {
    const minPasswordLength = 8;

    this.myForm = this.formBuilder.group({
      nombre: [, Validators.required],
      apellido: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      url: [, Validators.required],
      contrasenya: [, [Validators.required, Validators.minLength(minPasswordLength)]],
      repetir: [, [Validators.required, this.checkPasswords]]
    });

  }

  private checkPasswords(control: AbstractControl) {

    let resultado = { matchPassword: true };

    if (control.parent?.value.contrasenya === control.value) {
      resultado = null;
    }

    return resultado;

  }

}
