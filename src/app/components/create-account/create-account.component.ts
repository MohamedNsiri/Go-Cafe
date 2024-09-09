import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent {
  form: FormGroup;

  ngOnInit(){
  }

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: [' ', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      rememberMe: [false],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }

  passwordFieldType: string = 'password';
  confirmPasswordFieldType: string = 'password';

  togglePasswordVisibility(){
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  toggleConfirmPasswordVisibility(){
    this.confirmPasswordFieldType = this.confirmPasswordFieldType === 'password' ? 'text' : 'password';
  }
}
