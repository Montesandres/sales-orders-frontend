import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../common/toast/toast.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toastService = inject(ToastService);

  logInForm = new FormGroup({
    userName: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  async logIn() {
    try {
      const res = await this.authService.logIn(
        this.logInForm.value.userName!,
        this.logInForm.value.password!
      );
      console.log(res);
      this.router.navigate(['home']);
    } catch (error) {
      this.toastService.showError(this.handleError(error));
    }
  }

  private handleError(error: any): string {
    const err = error as HttpErrorResponse;

    if (err.error.statusCode === 404) {
      return `El usuario: ${this.logInForm.value.userName}. No fue encontrado`;
    }
    if (err.error.statusCode === 401) {
      return `Las credenciales no son válidas`;
    }

    console.log(err);

    return 'Error desconocido';
  }
}
