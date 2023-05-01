import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    role: new FormControl('', Validators.required),
  });

  get username(): AbstractControl {
    return this.form.get('username');
  }

  get password(): AbstractControl {
    return this.form.get('password');
  }

  get role(): AbstractControl {
    console.log(this.form.get('role'));
    return this.form.get('role');
  }

  register(): void {
    // if (this.form.valid) {
    //   const user: UserRegistrationRequestModel = this.form.getRawValue();
    //   this.authenticationService.register(user).subscribe();
    // }
  }
}
