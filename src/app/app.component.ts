import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastService } from './common/toast/toast.service';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService, ToastService],
})
export class AppComponent {

  authService = inject(AuthService)

  ngOnInit():void{
    this.authService.checkAutentication();
  }
}
